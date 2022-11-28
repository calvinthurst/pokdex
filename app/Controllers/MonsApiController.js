
import { appState } from "../AppState.js";
import { PokeApiMon } from "../Models/Mon.js";
import { monsApiServices } from "../Services/MonsServices.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawPokemon() {
  let mons = appState.apiMons
  let template = ''
  mons.forEach(m => template += PokeApiMon.listTemplate(m))
  setHTML('api-mons', template)
}

function _drawActivePokemon() {
  let mon = appState.activeMon
  if (mon) {
    setHTML('active-mon', mon.activeTemplate)
  } else {
    setHTML('active-mon', PokeApiMon.activeTemplate())
  }
}



export class MonsApiController {
  constructor() {
    appState.on('apiMons', _drawPokemon)
    appState.on('activeMon', _drawActivePokemon)
    this.getMon()
    console.log('Controller connected');
  }

  async getMon() {
    try {
      await monsApiServices.getMon()
    } catch (error) {
      Pop.error(error)
      console.error(error.message)
    }
  }

  async getOneMon(name) {
    try {
      await monsApiServices.getOneMon(name)
    } catch (error) {
      Pop.error(error)
      console.error(error.message)
    }
  }
}