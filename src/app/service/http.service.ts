import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { FilesData } from '../common/file-types';

@Injectable({ providedIn: 'root' })
export abstract class HttpService {
  abstract getFiles(): Observable<FilesData>;
}
