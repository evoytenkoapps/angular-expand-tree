import { Component, Input, OnInit } from '@angular/core';
import { TREE_DATA } from '../../common/data';
import { FolderInfo } from '../../model/fileInfo';
import { FileTypes } from '../../common/file-types';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css'],
})
export class TreeNodeComponent implements OnInit {
  @Input() someData: FolderInfo;

  public fileTypes: any = FileTypes;

  constructor() {}

  ngOnInit(): void {}
}
