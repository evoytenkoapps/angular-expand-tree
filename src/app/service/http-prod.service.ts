import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';

export class HttpProdService extends HttpService {
  constructor(private httpClient: HttpClient) {
    super();
  }
  getFiles() {
    return this.httpClient.get('/assets/data/data.json');
  }
}
