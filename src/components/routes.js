import { Route, Switch } from "react-router";
import Devices from "./devices";

export default function Routes() {
  return (
    <Switch>
      <Route path="/devices">
        <Devices />
      </Route>
    </Switch>
  );
}
