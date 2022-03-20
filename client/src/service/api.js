import axios from "axios";

export const authenticateSignup = async (user) => {
  try {
    return await axios.post(`/signup`, user);
  } catch (err) {
    console.log("Error while calling signup api", err);
  }
};

export const authenticateLogin = async (user) => {
  try {
    return await axios.post(`/login`, user);
  } catch (err) {
    console.log("Error while calling login api", err);
  }
};

export const payUsingPaytm = async (data) => {
  try {
    let response = await axios.post(`/payment`, data);

    return response.data;
  } catch (err) {
    console.log("Error while calling paytm api", err);
  }
};
