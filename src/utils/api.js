const token = process.env.REACT_APP_API;

export async function listDevices(signal) {
  try {
    const res = await fetch(
      "https://api.invitenetworks.com/v0/9b82f7ab-6303-8eb5-d1a7-9b53740235aa/devices/",
      {
        signal,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.json();
  } catch (err) {
    console.log(err);
  }
}

export async function listInterfaces() {
  console.log("hello");

  console.log(token);
  try {
    const res = await fetch(
      "https://api.invitenetworks.com/v0/9b82f7ab-6303-8eb5-d1a7-9b53740235aa/interfaces/",
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.json();
  } catch (err) {
    console.log(err);
  }
}
