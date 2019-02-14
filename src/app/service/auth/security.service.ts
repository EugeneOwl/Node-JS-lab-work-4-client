import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SecurityService {
  readonly url = environment.serverUrl + '/auth';
  readonly isAuthorizedUrl = this.url + '/is-authorized';

  constructor(private http: HttpClient) {
  }

  async isAuthorized() {
    const response = await this.http.get(this.isAuthorizedUrl)
      .toPromise();
    return response;
  }
}
