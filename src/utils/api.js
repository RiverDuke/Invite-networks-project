const API_URL =
  "https://api.invitenetworks.com/v0/9b82f7ab-6303-8eb5-d1a7-9b53740235aa/devices";
const UUID = "9b82f7ab-6303-8eb5-d1a7-9b53740235aa";

export async function listDevices() {
  const url = new URL(`${API_URL}/${UUID}/devices`);
  const options = {
    method: "GET",
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer 986a197903a3212cc8fb93bfe030d8a67b568b03b924db327bd180592c6729e94`,
    },
  };

  return await fetch(url, options);
}
