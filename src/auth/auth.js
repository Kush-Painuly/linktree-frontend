import axios from "axios";

const baseURL = import.meta.env.VITE_APP_BACKEND_URL;

export const login = async (data) => {
  try {
    const response = await axios.post(`${baseURL}/login`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
    return response;
  } catch (err) {
    throw err;
  }
};
