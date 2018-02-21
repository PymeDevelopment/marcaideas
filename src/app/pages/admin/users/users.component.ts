import {Component, OnInit} from '@angular/core';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {IUser} from "../../../utils/Interfaces";
import {UserService} from "../../../services/user.service";
import {DialognewuserComponent} from "../../../components/dialognewuser/dialognewuser.component";

@Component({
  selector: 'pymedevelopment-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {
  displayedColumns = [
    "id",
    "fullname",
    "telefono",
    "direccion",
    "di",
    "email",
    "image_url",
    "created_at",
    "updated_at"
  ];
  dataSource;


  constructor(private _userService: UserService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this._userService.getAll().subscribe(
      (res: any) => {
        this.dataSource = new MatTableDataSource(res);
      },
      error => {
        console.log(error);
      }
    );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  openDialogNewUser() {
    const dialogNewUser = this.dialog.open(DialognewuserComponent);
    dialogNewUser.afterClosed().subscribe(res => {
      this.getUsers();
    });
  }

}
