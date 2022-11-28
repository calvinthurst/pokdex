import { appState } from "../AppState.js";
import { PokeApiMon } from "../Models/Mon.js";



const MonApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/'
})

class MonsApiServices {
  async getOneMon(name) {
    const res = await MonApi.get(name)
    console.log('[MON NAME]', res.data)
    appState.activeMon = new PokeApiMon(res.data)
  }
  async getMon() {
    const res = await MonApi.get()
    console.log('[got pokemon]', res.data);
    appState.apiMons = res.data.results
    console.log(appState.apiMons)
  }

}

export const monsApiServices = new MonsApiServices()