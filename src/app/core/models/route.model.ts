import {PlaceModel} from './place.model';

export class RouteModel{
        public id?:number;
        public name?:string;
        public description?:string;
        public cover_id?:number;
        public route_type?:string;
        public image?:string;
        public is_manual?:boolean;
        public is_liked?:boolean;
        public distance?:number;
        public duration?:number;
        public likes_count?:number;
        public reposts_count?:number;
        public places?:PlaceModel[];
        public created_at?:Date;
        public updated_at?:Date;
}