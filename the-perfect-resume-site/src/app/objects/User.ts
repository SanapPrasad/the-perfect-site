import { EducationModel } from "./EducationModel";
import { ExperienceModel } from "./ExperienceModel";
import { OTPValidation } from "./OTPValidation";

export class User{
    constructor(
        public id:number,
        public firstname:String,
        public lastname:String,
        public username:String,
        public password:String,
        public accountCreateDT:Date,
        public otpValidation:OTPValidation,
        public education:EducationModel[],
        public experience:ExperienceModel[]
    ){}
}
