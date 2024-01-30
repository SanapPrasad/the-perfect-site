import { ActivityCertificationModel } from "./ActivityCertificationModel";
import { AddressModel } from "./AddressModel";
import { EducationModel } from "./EducationModel";
import { ExperienceModel } from "./ExperienceModel";
import { LanguageModel } from "./LanguageModel";
import { SkillModel } from "./SkillModel";
import { User } from "./User"

export class ApiRequestBody{
    constructor(
        public user:User,
        public otp: String,
        public address: AddressModel,
        public education: EducationModel,
        public experience: ExperienceModel,
        public language: LanguageModel[] ,
        public skill: SkillModel[],
        public LactivityCertification: ActivityCertificationModel[],
    ){}
}