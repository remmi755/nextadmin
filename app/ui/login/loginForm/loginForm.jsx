"use client";

import { authenticate } from "@/app/lib/actions";

import styles from "./loginForm.module.css";

import { useFormState } from "react-dom";
import { useState } from "react";

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);

  // const [err, setErr] = useState();
  //
  // const handleLogin = async (formData) => {
  //   const data = await authenticate(formData);
  //   data.error && setErr(data.error);
  // };
  return (
    <div className={styles.container}>
      <form className={styles.form} action={formAction}>
        <h1>Login</h1>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login</button>
        {state && state}
      </form>
    </div>
  );
};

export default LoginForm;
