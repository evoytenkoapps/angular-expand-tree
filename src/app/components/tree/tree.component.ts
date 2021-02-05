import { Component, Input, OnInit } from '@angular/core';
import { TREE_DATA } from '../../common/data';
import { FolderInfo } from '../../model/fileInfo';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
})
export class TreeComponent implements OnInit {
  public data: FolderInfo[];

  constructor() {}

  ngOnInit(): void {
    this.data = TREE_DATA.tree;
    console.log('data', this.data);
  }
}
