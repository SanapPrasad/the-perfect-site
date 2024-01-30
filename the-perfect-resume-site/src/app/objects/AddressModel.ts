import { User } from "./User";

export class AddressModel{
    constructor(
        public addressId:number,
        public pin:String,
        public town:String,
        public city:String,
        public district:String,
        public state:String,
        public country:String,
        public addressType:String,
        public user:User
    ){}
}