import { User } from "./User";

export class LanguageModel{
    constructor(
        public languageId:number,
        public langTitle:String,
        public level:number,
        public user:User
    ){}
}