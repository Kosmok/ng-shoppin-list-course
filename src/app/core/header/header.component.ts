import { Component, OnInit } from '@angular/core';

import { DataStrorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private dsService: DataStrorageService,
              private authService: AuthService) { }

  get isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  ngOnInit() {
    // this.onFeathData();
  }

  onSaveData() {
    this.dsService.storeRecipes().subscribe((res) => console.log(res));
  }

  onFeathData() {
    this.dsService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }

}
