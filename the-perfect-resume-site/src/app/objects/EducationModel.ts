export class EducationModel{
    constructor(
        public educationId:number,
        public college:String,
        public university:String,
        public stream:String,
        public startYear:String,
        public endYear:String,
        public startMonth:String, 
        public endMonth:String, 
        public mark:String, 
        public educationType:String, 
    ){}
}