import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Grup } from 'src/app/models/grup';
import { Sonuc } from 'src/app/models/sonuc';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  gruplar:Grup[];
  secGrup:Grup=new Grup();
  sonuc:Sonuc=new Sonuc();

  returnUrl = "";
  constructor(
    public  route : ActivatedRoute,
    public router : Router,
    public servis : DataService,
  ) { }

  ngOnInit(): void {
    this.secGrup.id=0;
    this.GrupListe();
  }
  GrupListe(){
    this.servis.GrupListele().subscribe((d:Grup [])=>{
      this.gruplar = d ;
    })
  }
  Duzenle(g:Grup){
    Object.assign(this.secGrup,g);
  }
  Sil( g : Grup|any){
    this.servis.GrupSil(g.id).subscribe(d=>{
    this.sonuc.islem=true;
    alert("Silindi")
    this.GrupListe();
    },err=>{
      this.sonuc.islem=false;
      alert("Hata Oluştu")
    });
  }
  Iptal(){
    this.secGrup = new Grup();
    this.secGrup.id=0;
    this.sonuc= new Sonuc();
  }





  Kaydet(){
    if (this.secGrup.id==0) {
      this.servis.GrupEkle(this.secGrup).subscribe(d=>{
        this.sonuc.islem=true;
        alert ("Kaydedildi")
        this.GrupListe();
      },err=>{
        this.sonuc.islem=false;
        alert("Hata Oluştu")
      });
    }
    else{
      this.servis.GrupDuzenle(this.secGrup).subscribe(d=>{
        this.sonuc.islem=true;
        alert("Grup Düzenlendi")
        this.Iptal();
        this.GrupListe();
      },err=>{
        this.sonuc.islem=false;
        alert("Hata Oluştu")
      });
    }
  }

  LogOut(){
    localStorage.clear();
    alert("Çıkış Yapılıyor...");
    this.router.navigateByUrl(this.returnUrl);
  }
  OturumKontrol(){
    var token = localStorage.getItem("token");
    if (token) {
      return true;
    }else{
      return false;
    }
  }

}
