import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listDevices } from "../utils/api";

export default function Devices() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    listDevices().then((res) => setDevices(res));
  }, []);

  function DeviceList() {
    if (devices.length > 0) {
      return (
        <div className="row justify-content-center">
          {devices.map((device) => {
            return (
              <div
                className="card col-10 col-md-4 m-3"
                style={{ width: "18rem" }}
                key={device._id}
              >
                <div className="card-body ">
                  <h5 className="card-title ">Name: {device.name}</h5>
                  <h5 className="card-text ">Id: {device._id}</h5>
                  <Link
                    to={`/devices/${device._id}/interfaces`}
                    className="card-link "
                  >
                    <h5>Interfaces</h5>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="alert alert-danger" role="alert">
          No Devices found, or invalid Authorization
        </div>
      );
    }
  }

  return (
    <div>
      <h1 className="text-center display-3 mt-5 mb-4">Devices</h1>
      <DeviceList />
    </div>
  );
}
