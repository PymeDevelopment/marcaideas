import {Component, OnInit} from '@angular/core';
import {IUserSave} from "../../utils/Interfaces";
import {MatDialogRef} from "@angular/material";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'pymedevelopment-dialognewuser',
  templateUrl: './dialognewuser.component.html',
  styleUrls: ['./dialognewuser.component.scss'],
  providers: [UserService]
})
export class DialognewuserComponent implements OnInit {
  private user: IUserSave = {
    password: "",
    email: "",
    di: "",
    direccion: "",
    fullname: "",
    image_url: "",
    telefono: ""
  };

  constructor(private dialogRef: MatDialogRef<DialognewuserComponent>, private _userService: UserService) {
  }

  ngOnInit() {
  }

  onSave() {
    this._userService.save(this.user).subscribe(
      (res: any) => {
        console.log(res);
      },
      error => {
        console.log(error);
      },
      () => {
        console.log("complete");
        this.dialogRef.close();
      }
    );
  }
}
