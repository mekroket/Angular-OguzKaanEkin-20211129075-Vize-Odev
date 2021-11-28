import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Kisi } from '../models/kisi';
import { Uye } from '../models/uye';
import { Grup } from '../models/grup';
import { Ders } from '../models/ders';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public apiUrl = "http://127.0.0.1:3000/";





  public siteAdi = "Teknikbilimler";
  public kisiler: Kisi[] = [
    {
      "id": 2,
      "adsoyad": "Gülgen Somuncu",
      "mail": "malesuada@eu.uz",
      "yas": "et"
    },
    {
      "id": 5,
      "adsoyad": "Kalhan Bentli",
      "mail": "interdum@tortor.eg",
      "yas": "ullamcorper vel erat accumsan Aenean nec accumsan"
    },
    {
      "id": 2,
      "adsoyad": "Gülgen Somuncu",
      "mail": "malesuada@eu.uz",
      "yas": "et"
    },
    {
      "id": 5,
      "adsoyad": "Kalhan Bentli",
      "mail": "interdum@tortor.eg",
      "yas": "ullamcorper vel erat accumsan Aenean nec accumsan"
    },
    {
      "id": 5,
      "adsoyad": "Kalhan Bentli",
      "mail": "interdum@tortor.eg",
      "yas": "ullamcorper vel erat accumsan Aenean nec accumsan"
    },
    {
      "id": 5,
      "adsoyad": "Kalhan Bentli",
      "mail": "interdum@tortor.eg",
      "yas": "ullamcorper vel erat accumsan Aenean nec accumsan"
    },
    
  ]
  constructor(
    public  http : HttpClient
  ) {}

  KayitListele(){
    return this.kisiler;
  }

  KayitSil(k:Kisi){
    var index = this.kisiler.indexOf(k);
    this.kisiler.splice(index,1);
    return true;
  }
  KayitById(id:number){
    var filtre = this.kisiler.filter(s=>s.id==id);
    return filtre[0];
  }






  KayitAraSirala(ara:string){
    return this.http.get(this.apiUrl+"kayit?q? "+ara);
  }
  KayitSayfala(p:number,lim:number){
  return this.http.get(this.apiUrl + "kayit?_page="+p+"&_limit="+lim);
  }



  ParolaUret(s:number){
    var st: string="qwertyuiopasdfghjklzxcvbnm0123456789";
    var p="";
    
    for (let i = 0; i < s; i++) {
      var r = Math.floor(Math.random()*st.length);
      p += st.charAt(r);
    }
    return p;
    }

  OturumKontrol(){
    var token = localStorage.getItem("token");
    if (token) {
      return true;
    }else{
      return false;
    }
  }

  UyeLogin(k:string,p:string){
    return this.http.get(this.apiUrl+"uye?kadi="+k+"&parola="+p);
  }



  YetkiKontrol(yetkiler:any) {
    var sonuc: boolean = false;
    var uyeYetkiler: any | string[] = JSON.parse(localStorage.getItem('uyeYetkileri') || '{}');
    if (yetkiler) {
      yetkiler.forEach((element: any) => {
        if (uyeYetkiler.indexOf(element)> -1) {
          sonuc = true;
          
        }
      });
    }
    return sonuc;
  }

  UyeEkle(uye:Uye){
    return this.http.post(this.apiUrl + "uye", uye)
  }
  UyebyId(id:number){
    return this.http.get(this.apiUrl+"uye/" + id);
  }





  GrupListele(){
    return this.http.get(this.apiUrl+"grup");
  }
  GrupById(id:number){
    return this.http.get(this.apiUrl+"grup/"+id);
  }
  GrupEkle(g:Grup){
    return this.http.post(this.apiUrl+"grup/",g);
  }
  GrupDuzenle(g:Grup){
    return this.http.put(this.apiUrl+"grup/"+g.id,g);
  }
  GrupSil(id:number){
    return this.http.delete(this.apiUrl+"grup/"+id);
  }
  
  
  
  
  
  
  
  
  
  DersListeleByGrupId(gId:number){
    return this.http.get(this.apiUrl+"ders?grupId="+gId);
  }
  DersById(id:number){
    return this.http.get(this.apiUrl+"ders/"+id);
  }
  DersEkle(d:Ders){
    return this.http.post(this.apiUrl+"ders",d);
  }
  DersDuzenle(d:Ders){
    return this.http.put(this.apiUrl+"ders/"+d.id,d);
  }
  DersSil(id:number){
    return this.http.delete(this.apiUrl+"ders/"+id);
  }
  
  }


