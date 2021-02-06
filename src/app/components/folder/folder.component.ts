import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FolderInfo } from '../../model/fileInfo';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css'],
})
export class FolderComponent implements OnInit {
  @Input() isExpanded: boolean;
  @Input() isSortDesc: boolean;
  @Input() folderInfo: FolderInfo;
  @Output() showChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() sortChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  public onExpand(data: boolean) {
    this.isExpanded = data;
    this.showChange.emit(this.isExpanded);
  }

  public onSort() {
    this.isSortDesc = !this.isSortDesc;
    this.sortChange.emit(this.isSortDesc);
  }
}
