import { Component, Input, OnInit } from '@angular/core';
import { TREE_DATA } from '../../common/data';
import { FileInfo, FolderInfo } from '../../model/fileInfo';
import { FileTypes } from '../../common/file-types';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css'],
})
export class TreeNodeComponent implements OnInit {
  @Input() folderInfo: FolderInfo;
  public fileTypes: any = FileTypes;
  public isShow = false;
  public isSortDesc = false;

  constructor() {}

  ngOnInit(): void {
    this.onSort(this.isSortDesc);
  }

  onShow(data: boolean) {
    this.isShow = data;
  }

  onSort(data: boolean) {
    this.folderInfo.children.sort((a, b) => {
      const bandA = a.name.toLowerCase();
      const bandB = b.name.toLowerCase();
      let compare = 0;
      if (bandA < bandB) {
        compare = -1;
      }
      if (bandA > bandB) {
        compare = 1;
      }
      return data ? compare * -1 : compare;
    });
  }
}
