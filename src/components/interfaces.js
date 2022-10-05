import React, { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import { listInterfaces } from "../utils/api";

export default function Interfaces() {
  const { params } = useRouteMatch();
  const [interfaces, setInterfaces] = useState([]);
  const history = useHistory();

  useEffect(() => {
    listInterfaces().then((res) => setInterfaces(res));
  }, []);

  const matchedDevices = interfaces.filter(
    (device) => device.device === params.deviceId
  );
  let deviceCount = matchedDevices.length;
  let emptySpace = [];

  while (deviceCount < 4) {
    emptySpace.push("&nbsp;");
    deviceCount++;
  }

  function InterfaceList() {
    return (
      matchedDevices &&
      matchedDevices.map((device) => {
        return (
          <li
            className="list-group-item text-left d-flex justify-content-around"
            key={device.hardware_id}
          >
            <p>Type: {device.type}</p> <p>hardware_Id: {device.hardware_id}</p>
            <p>Descritpion: {device.description}</p>
          </li>
        );
      })
    );
  }

  function SpaceFiller() {
    return (
      emptySpace &&
      emptySpace.map((space, index) => {
        return (
          <li className="list-group-item" key={index}>
            &nbsp;
          </li>
        );
      })
    );
  }

  return (
    <>
      <h1 className="display-4 text-center mt-5 mb-5">Interface List</h1>
      <div className="col-8 mx-auto text-center">
        <ul className="list-group mb-3">
          <InterfaceList />
          <SpaceFiller />
        </ul>
        <button
          className="btn btn-lg orange-btn mt-5 "
          onClick={() => history.goBack()}
        >
          Return
        </button>
      </div>
    </>
  );
}
