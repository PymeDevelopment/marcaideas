import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get("http://190.239.17.114/marcaideas/public/index.php/users");
  }

  save(user) {
    return this.http.post("http://190.239.17.114/marcaideas/public/index.php/users", user);
  }
}
