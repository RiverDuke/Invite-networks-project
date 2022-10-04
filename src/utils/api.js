import "base-64";

const API_URL =
  "https://api.invitenetworks.com/v0/9b82f7ab-6303-8eb5-d1a7-9b53740235aa/devices";
const UUID = "9b82f7ab-6303-8eb5-d1a7-9b53740235aa";

export async function listDevices() {
  const url = new URL(API_URL);
  const username = process.env.USERNAME;
  const password = process.env.PASSWORD;
  const options = {
    method: "GET",
    username,
    password,
    headers: {
      "Content-Type": "application/json",
    },
  };
  const res = await fetch(url, options);
  console.log(res);
  return res.json();
}
