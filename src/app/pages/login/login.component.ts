import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef, MatSnackBar} from "@angular/material";
import {DialogloadingComponent} from "../../components/dialogloading/dialogloading.component";

@Component({
  selector: 'pymedevelopment-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login = {email: '', password: ''};

  constructor(public http: HttpClient, private router: Router, private dialog: MatDialog, public snackBar: MatSnackBar) {
    if (localStorage.getItem('user')) {
      this.router.navigate(['/admin']);
    }

  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.login.email === "" || this.login.password === "") {
      this.snackBar.open("Ingresa los datos correctamente.", "ok");
    } else {
      const dialogRef = this.dialog.open(DialogloadingComponent);
      this.http.post('http://190.239.17.114/marcaideas/public/index.php/login', this.login).subscribe(
        (res: any) => {

          if (res) {
            localStorage.setItem('user', JSON.stringify(res));
            this.router.navigate(['/admin']);
          }
        },
        error => {
          console.log(error);
          dialogRef.close();
        },
        () => {
          console.log('complete');
          dialogRef.close();
        }
      );
    }
  }
}
