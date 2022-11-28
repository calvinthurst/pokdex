export class PokeApiMon {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.img = data.sprites.front_default
    this.height = data.height
    this.weight = data.weight
    this.type1 = data.types[0].type.name
    this.type2 = data.types[1] ? data.types[1].type.name : ''
  }


  get activeTemplate() {
    return `
    <div class="col-10 card bg-danger text-light text-center">${this.name}</div>
    <img class="col-10 img-fluid" src="${this.img}" alt="">
    <div class="col-5">height: ${this.height}</div>
    <div class="col-5">weight: ${this.weight}</div>
    <div class="col-5">Type: ${this.type1}</div>
    <div class="col-5">${this.type2}</div>
    <button class="col-10 btn btn-danger text-light" onclick="app.MonsApiController.getOneMon('${this.id}')"><i
    class="mdi mdi-pokeball"></i>catch</button>
    `
  }

  static listTemplate(apiMons) {
    return `<div class="col-12 selectable" onclick="app.monsApiController.getOneMon('${apiMons.name}')">${apiMons.name}</div>`
  }


  static activeTemplate() {
    return `<div class="col-10 card bg-danger">PICK A POKEMON</div>
    `
  }
}