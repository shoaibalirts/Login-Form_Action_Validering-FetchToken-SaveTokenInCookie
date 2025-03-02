"use server";

import { gettoken } from "@/lib/server-fetch";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

export default async function LoginAction(prevState, formData) {
  console.log("Form Data: ", formData);
  const username = formData.get("username");
  const password = formData.get("password");

  // define scheme object structure
  const schema = z.object({
    username: z.string().min(1, { message: "Du skal udfyld brugernavn" }),
    password: z.string().min(1, { message: "Du skal udfyld et password" }),
  });

  //
  const validate = schema.safeParse({ username, password });
  console.log(validate?.error?.format());
  if (validate.success === false) {
    return {
      formData: {
        username,
        password,
      },
      errors: validate.error.format(),
    };
  }

  // success
  const token = await gettoken(username, password);
  console.log(token);

  const cookieStore = await cookies();

  const now = new Date().getTime();
  const lifetime = token.validUntil - now;
  console.log(lifetime / 1000);

  cookieStore.set("landrup_uid", token.userId, { maxAge: lifetime / 1000 });
  cookieStore.set("landrup_token", token.token, { maxAge: lifetime / 1000 });
  cookieStore.set("landrup_role", token.role, { maxAge: lifetime / 1000 });

  redirect("/calendar");
}
