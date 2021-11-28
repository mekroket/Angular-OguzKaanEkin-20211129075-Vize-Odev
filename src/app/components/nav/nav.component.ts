import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { LoginComponent } from '../login/login.component';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Kayit } from 'src/app/models/kayit';
import { Uye } from 'src/app/models/uye';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  returnUrl = "";
  kayitlar:Kayit[];
  secKayit:Kayit= new Kayit();
  
  constructor(
    public  route : ActivatedRoute,
    public router : Router,
    public servis : DataService,

    
  ) { }

  ngOnInit() {
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
