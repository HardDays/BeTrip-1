import { Injectable } from "@angular/core";
import { Http, URLSearchParams } from '@angular/http';
import {TokenModel} from "./../models/token.model";
import {CheckboxModel} from "./../models/checkbox.model";
import {CategoryModel} from "./../models/category.model";
import { HttpService } from './http.service';
import { Router, ActivatedRoute, Params } from "@angular/router";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';
import {Subject} from 'rxjs/Subject';
import { UserModel } from '../models/user.model';


@Injectable()
export class MainService{
    public onPageChange$: Subject<boolean>;
    constructor(private http: HttpService, private router: Router){
        this.onPageChange$ = new Subject();
        this.onPageChange$.next(true);
    }



    public GetAllCategory(){
        return [
            new CheckboxModel("Free coffee","free_coffee", "Бесплатный кофе"),
            new CheckboxModel("Coffee","coffee", "Кофе"),
            new CheckboxModel("Free printing","free_printing", "Бесплатная печать"),
            new CheckboxModel("Conference room","conference_room", "Комната для конференций"),
            new CheckboxModel("Outdoor space","outdoor_space", "Место на улице"),
            new CheckboxModel("Extra monitor","extra_monitor", "Дополнительный монитор")
        ];
    }


    public SetCheckedCB(cb:CheckboxModel[], catg:CategoryModel[]){
        if(catg){
            for(let item of catg){
                let index = cb.findIndex(x=>x.value == item.name);
                if(cb[index]){
                    cb[index].checked = true;
                }
            }
        }
        return cb;
    }

    public GetValuesOfCheckedCB(input:CheckboxModel[]){
        let result:CategoryModel[] = [];
        for(let i of input){
            if(i.checked)
                result.push(new CategoryModel(i.value));
        }
        return result;
    }

}