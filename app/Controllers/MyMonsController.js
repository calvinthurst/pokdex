import { myMonsServices } from "../Services/MyMonsServices.js";





export class MyMonsController {
  constructor() {
    console.log('MyMons connected');
  }

  addMyMons() {
    myMonsServices.addMyMons()
  }
}