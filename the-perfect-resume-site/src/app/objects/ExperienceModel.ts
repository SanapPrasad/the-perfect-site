import { AchievementModel } from "./AchievementModel";
import { ProjectModel } from "./ProjectModel";
import { User } from "./User";

export class ExperienceModel{
    static experienceId:number;
    static title:String;
    static employmentType:String;
    static companyName:String;
    static location:String;
    static locationType:String;
    static startMonth:String; 
    static endMonth:String;
    static startYear:String; 
    static endYear:String; 
    static skills:String;
    static description:String; 
    static achievements:AchievementModel[];
    static project:ProjectModel[];
    static user: User;
constructor(
        public experienceId:number,
        public title:String,
        public employmentType:String,
        public companyName:String,
        public location:String,
        public locationType:String,
        public startMonth:String, 
        public endMonth:String, 
        public startYear:String, 
        public endYear:String, 
        public skills:String, 
        public description:String, 
        public achievements:AchievementModel[],
        public project:ProjectModel[],
        public user: User
    ){}
}