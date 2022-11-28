import { MonsApiController } from "./Controllers/MonsApiController.js";
import { MyMonsController } from "./Controllers/MyMonsController.js";
// import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  monsApiController = new MonsApiController()
  myMonsController = new MyMonsController()
}

window["app"] = new App();
