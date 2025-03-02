"use server";

import { API_BASE_URL } from "@/constants";
import fetchErrorHandling from "./fetch-file-handling";
import { notFound } from "next/navigation";

export async function getAllActivities() {
  try {
    const response = await fetch(`${API_BASE_URL}/activities`);

    fetchErrorHandling(response); // if we get throw new error from fetch-file-handling. that will be received in catch block
    const activities = await response.json();

    return activities;
  } catch (error) {
    // catch block will be executed automatically upon receiving error
    console.log("expected error");
    throw new Error(error); // we forward error to error.js so that we can display it to user
  }
}

export async function gettoken(username, password) {
  try {
    const response = await fetch("http://localhost:4000/auth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    fetchErrorHandling(response);
    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
}
