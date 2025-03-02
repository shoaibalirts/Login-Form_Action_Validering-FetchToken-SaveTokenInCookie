"use client";

import { useActionState, useEffect } from "react";
import LoginAction from "./login-action";

export default function LoginForm() {
  const [formState, formAction, isPending] = useActionState(LoginAction);

  useEffect(
    function () {
    //   console.log("Form State: ", formState.errors.username._errors); // {formData:{}, errors}
    },
    [formState]
  );
  return (
    <form action={formAction}>
      <div>
        <label>
          Brugernavn
          <input
            defaultValue={formState?.formData?.username}
            type="text"
            name="username"
          />
          <span>{formState?.errors?.username?._errors[0]}</span>
        </label>
      </div>
      <div>
        <label>
          Adgangskode
          <input
            defaultValue={formState?.formData?.password}
            type="password"
            name="password"
          />
          <span>{formState?.errors?.password?._errors[0]}</span>
        </label>
      </div>
      <button 
        type="submit" 
        disabled={isPending?true:false}
        className="bg-purple-600 text-white disabled:bg-gray-400 disabled:text-black"
        >
        {isPending?"Logger ind":"Log ind"}
        </button>
    </form>
  );
}
