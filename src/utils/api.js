export async function listDevices(signal) {
  const res = await fetch(
    "https://api.invitenetworks.com/v0/9b82f7ab-6303-8eb5-d1a7-9b53740235aa/devices/",
    {
      signal,
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer b4e4affd9dbfc73e9eb9f1ea5abd154b11d61e0a2711484746d83a346477f72dcedd9b561f5a1",
      },
    }
  );
  return res.json();
}

export async function listInterfaces() {
  const res = await fetch(
    "https://api.invitenetworks.com/v0/9b82f7ab-6303-8eb5-d1a7-9b53740235aa/interfaces/",
    {
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer b4e4affd9dbfc73e9eb9f1ea5abd154b11d61e0a2711484746d83a346477f72dcedd9b561f5a1",
      },
    }
  );
  return res.json();
}
