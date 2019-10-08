export class Books{
    id:number;
    title:string;
    auna:string;
    price:string;
    des:string;
    img:string;
    constructor(name,auna,price,img,des){
        this.title = name;
        this.auna = auna;
        this.price = price;
        this.img = img;
        this.des = des;
    }
}