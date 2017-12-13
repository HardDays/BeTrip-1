export class CategoryModel{
    constructor(
        public name?:string,
        public description?: string
    ){
        if(!description)
            this.description = "";
    }
}