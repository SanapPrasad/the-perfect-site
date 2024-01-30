import { User } from "./User";

export class OTPValidation{
    constructor(
        public otpValidationId:number,
        public username:String,
        public otp:String,
        public otpGenerateDT:Date,
        public verify:boolean,
        public user:User
    ){}
}