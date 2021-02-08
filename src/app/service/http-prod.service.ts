import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilesData } from '../common/file-types';

export class HttpProdService extends HttpService {
  constructor(private httpClient: HttpClient) {
    super();
  }
  getFiles(): Observable<FilesData> {
    return this.httpClient.get<FilesData>('/assets/data/data.json');
  }
}
