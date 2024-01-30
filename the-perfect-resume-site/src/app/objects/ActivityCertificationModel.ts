import { User } from "./User";

export class ActivityCertificationModel{
    constructor(
        public actCerId:number,
        public actCerTitle:String,
        public user:User
    ){}
}