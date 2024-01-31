import { MaterialIconSystem, Router } from "@common-module/app";
import { TestCharacterView } from "@common-module/game";
import Config from "./Config.js";

MaterialIconSystem.launch();

export default async function initialize(config: Config) {
  if (sessionStorage.__spa_path) {
    Router.goNoHistory(sessionStorage.__spa_path);
    sessionStorage.removeItem("__spa_path");
  }

  Router.route("test/character", TestCharacterView);
}
