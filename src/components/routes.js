import { Route, Switch } from "react-router";
import Devices from "./devices";
import Interfaces from "./interfaces";
import Notfound from "./notfound";

export default function Routes() {
  return (
    <Switch>
      <Route path="/devices/:deviceId/interfaces">
        <Interfaces />
      </Route>
      <Route path="/devices">
        <Devices />
      </Route>
      <Route>
        <Notfound />
      </Route>
    </Switch>
  );
}
