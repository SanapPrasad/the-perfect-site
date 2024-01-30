import { User } from "./User";

export class SkillModel{
    constructor(
        public skillId:number,
        public skillTitle:String,
        public level:number,
        public user:User
    ){}
}