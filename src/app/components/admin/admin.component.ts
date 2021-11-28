import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  returnUrl = "";
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
