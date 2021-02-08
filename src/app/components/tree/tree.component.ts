import { Component, Input, OnInit } from '@angular/core';
import { TREE_DATA } from '../../common/data';
import { FolderInfo } from '../../model/file-info';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
})
export class TreeComponent implements OnInit {
  public data: FolderInfo[];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.data = TREE_DATA.tree;
    console.log('data', this.data);

    this.httpService
      .getFiles()
      .subscribe((data) => console.log('getFiles', data));
  }
}
