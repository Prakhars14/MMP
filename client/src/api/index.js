import axios from "axios";

axios.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const signIn = (formData) => axios.post("/signin", formData);
export const signUp = (formData) => axios.post("/signup", formData);
