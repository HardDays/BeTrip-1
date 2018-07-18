export class PlaceModel{
        public id?:number;
        public name?:string;
        public description?:string;
        public lat?:number;
        public lng?:number;
        public address?:string;
        public score?:number;
        public cover_id?:number;
        public image?:string;
        public place_type?:string;
        public is_manual?:boolean;
        public is_liked?:boolean;
        public likes_count?:number;
        public reposts_count?:number;
        public categories?:string[];   
        public created_at?:Date;
        public updated_at?:Date;
}