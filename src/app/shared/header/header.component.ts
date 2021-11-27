import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mostrarMenu: boolean = false;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.mostrarMenuEmitter.subscribe(mostrar => this.mostrarMenu = mostrar);
  }

  logoutUser() {
    this.loginService.logout();
  }

}
