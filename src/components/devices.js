import { useEffect } from "react";
import { listDevices } from "../utils/api";

export default function Devices() {
  useEffect(() => {
    listDevices().then((devices) => {
      console.log(devices);
    });
  }, []);

  return <h1>Hello</h1>;
}
