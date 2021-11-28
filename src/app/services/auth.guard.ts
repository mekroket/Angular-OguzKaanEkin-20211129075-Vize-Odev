import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Data, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { DataService } from "./data.service";
import { observable } from "rxjs";
import { Uye } from "../models/uye";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(
        public servis:DataService,
        public router:Router
    ){ }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

let yetkiler=route.data["yetkiler"] as Array<string>;

if (!this.servis.OturumKontrol()) {
    this.router.navigate(['login'],{queryParams:{returnUrl:state.url}});
}
var sonuc:boolean=false;
sonuc = this.servis.YetkiKontrol(yetkiler);
if (!sonuc) {
    this.router.navigate(['login'],{queryParams:{returnUrl:state.url}});
    alert("Bu sayfaya erişebilmek için admin olarak giriş yapmalısınız!");
}
        return sonuc;
    }




}