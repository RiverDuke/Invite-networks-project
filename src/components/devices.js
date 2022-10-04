import { useEffect } from "react";
import { devices } from "../data/devices";
import { listDevices } from "../utils/api";

export default function Devices() {
  useEffect(() => {
    console.log("UseEffectStarts");
    listDevices().then((res) => {
      console.log(res);
    });
  }, []);

  function DeviceList() {
    // style={{ transform: "translateX(10%)" }}
    return (
      <div className="row ml-3">
        {devices.map((device) => {
          return (
            <div
              className="card col-10 col-md-4 m-3"
              style={{ width: "18rem" }}
              key={device._id}
            >
              <div className="card-body">
                <h5 className="card-title">{device.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div>
      <h1>Hello</h1>
      <DeviceList />
    </div>
  );
}
