"use server";

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
  if (validate.success===false) {
    return {
        formData: {
            username,
            password,
        },
        errors: validate.error.format(),
    };
  }
}
