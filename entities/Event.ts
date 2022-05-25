export class Event {

    constructor(
        public title: string, 
        public description: string, 
        public imageUrl: string, 
        public group: string, 
        public startDate: string, 
        public endDate: string, 
        public startTime: string, 
        public endTime: string, 
        public location: string, 
        public id?: string) {

    }
}