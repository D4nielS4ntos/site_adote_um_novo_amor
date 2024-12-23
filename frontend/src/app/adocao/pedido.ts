export class Pedido {
    adotante:any;
    animal:any;
    status:string;
    constructor(adotante:any, animal:any, status:string) {
        this.adotante = adotante;
        this.animal = animal;
        this.status = status;
    }
}