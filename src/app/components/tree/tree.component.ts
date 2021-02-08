import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FolderInfo } from '../../model/file-info';
import { HttpService } from '../../service/http.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
})
export class TreeComponent implements OnInit, OnDestroy {
  private componentDestroyed: Subject<any> = new Subject();
  public data: FolderInfo[];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService
      .getFiles()
      .pipe(takeUntil(this.componentDestroyed))
      .subscribe((data) => {
        console.log('gotFiles', data);
        this.data = data.tree;
      });
  }

  ngOnDestroy(): void {
    this.componentDestroyed.next();
    this.componentDestroyed.complete();
  }
}
