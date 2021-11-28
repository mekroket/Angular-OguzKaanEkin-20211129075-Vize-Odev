import { Component, OnInit } from '@angular/core';
import { Sonuc } from 'src/app/models/sonuc';
import { DataService } from 'src/app/services/data.service';
import { Kayit } from 'src/app/models/kayit';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Uye } from 'src/app/models/uye';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  returnUrl = "/login";
  uye:Uye[];
  secUye:Uye= new Uye();

  sonuc: Sonuc= new Sonuc();

  kayitlar:Kayit[];
  secKayit:Kayit= new Kayit();

  constructor(
    public servis : DataService,
    public  route : ActivatedRoute,
    public router : Router
  ) { }

  ngOnInit() {
  }

  UyeKaydet(){
    var tarih = new Date();
    this.secUye.admin = 0;
    this.secUye.id = 0;
  if(this.secUye.id == 0){
    this.secUye.id= Math.floor(Math.random() * 1000);
    this.servis.UyeEkle(this.secUye).subscribe(d => {
    this.sonuc.islem=true;
    alert("Kayıt Olundu Hoşgeldiniz")
    this.router.navigateByUrl(this.returnUrl);

  }, err =>{
    this.sonuc.islem=false;
    alert("Kayıt Başarısız")
  });
  }

}
}
