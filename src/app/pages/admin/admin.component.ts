import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'pymedevelopment-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  cerrarSesion() {
    localStorage.removeItem("user");
    this.router.navigate(['/login']);
  }
}
