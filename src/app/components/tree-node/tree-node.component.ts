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
  public isExpanded = false;
  public isSortDesc = false;

  constructor() {}

  ngOnInit(): void {
    if (this.isExpanded) {
      this.onSort(this.isSortDesc);
    }
  }

  onExpand(isExpanded: boolean) {
    this.isExpanded = isExpanded;
  }

  onSort(isDesc: boolean) {
    this.folderInfo.children.sort(this.sorting(isDesc));
  }

  private sorting(isDesc: boolean) {
    return (a: FolderInfo | FileInfo, b: FolderInfo | FileInfo) => {
      const bandA = a.name.toLowerCase();
      const bandB = b.name.toLowerCase();
      let compare = 0;
      if (bandA < bandB) {
        compare = -1;
      }
      if (bandA > bandB) {
        compare = 1;
      }
      return isDesc ? compare * -1 : compare;
    };
  }
}
