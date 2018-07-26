/** @format */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);

const LogLocation = async data => {
  navigator.geolocation.getCurrentPosition(position => {
    console.log(position.coords);
  });
};
AppRegistry.registerHeadlessTask("LogLocation", () => LogLocation);
