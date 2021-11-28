import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ders } from 'src/app/models/ders';
import { Grup } from 'src/app/models/grup';
import { Sonuc } from 'src/app/models/sonuc';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ders',
  templateUrl: './ders.component.html',
  styleUrls: ['./ders.component.css']
})
export class DersComponent implements OnInit {
returnUrl = "";
dersler : Ders[];
secDers:Ders = new Ders();
grupId : number
secGrup : Grup;
sonuc:Sonuc= new Sonuc();
gruplar:Grup[];
  constructor(
    public servis : DataService,
    public route : ActivatedRoute,
    public router : Router,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(p=>{
      this.grupId = p.gId;
      this.DersListe();
      this.GrupGetir();
      this.GrupListe();
      this.secDers.id = 0;
      this.secDers.grupId = this.grupId;
    })
  }

  DersListe(){
    this.servis.DersListeleByGrupId(this.grupId).subscribe((d:Ders[])=>{
      this.dersler = d;
    });
  }
  GrupGetir(){
    this.servis.GrupById(this.grupId).subscribe( (d:Grup)=>{
      this.secGrup = d;
    })
  }
  Kaydet(){
    if (this.secDers.id==0) {
      this.servis.DersEkle(this.secDers).subscribe(d=>{
        this.sonuc.islem=true;
        alert ("Kaydedildi")
        this.DersListe();
      },err=>{
        this.sonuc.islem=false;
        alert("Hata Oluştu")
      });
    }
    else{
      this.servis.DersDuzenle(this.secDers).subscribe(d=>{
        this.sonuc.islem=true;
        alert("Araç Düzenlendi")
        this.DersListe();
      },err=>{
        this.sonuc.islem=false;
        alert("Hata Oluştu")
      });
    }
  }



  Duzenle(d:Ders){
    Object.assign(this.secDers,d);
  }



  Sil(d:Ders){
    this.servis.DersSil(d.id).subscribe(d=>{
      this.sonuc.islem=true;
      alert ("Silindi")
      this.DersListe();
    },err=>{
      this.sonuc.islem=false;
      alert("Hata Oluştu")
    });
  }
  Iptal(){
    this.secDers = new Ders();
    this.secDers.id=0;
    this.secDers.grupId = this.grupId;
    this.sonuc= new Sonuc();
  }



  GrupListe(){
    this.servis.GrupListele().subscribe((d:Grup[])=>{
      this.gruplar = d;
    });
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
  YetkiKontrol(yetkiler: any) {
    var sonuc: boolean = false;
    var uyeYetkiler: string[] = JSON.parse(localStorage.getItem('uyeYetkileri'));
    if (yetkiler) {
      yetkiler.forEach((element: any) => {
        if (uyeYetkiler.indexOf(element) > -1) {
          sonuc = true;
          return false;
        }
      });
    }
    return sonuc;
  }
  Kirala(){
    alert("Aracınız Kiralandı")
    this.router.navigateByUrl(this.returnUrl);

  }
  
}
