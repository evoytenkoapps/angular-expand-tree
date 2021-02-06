import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FolderInfo} from '../../model/fileInfo';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css'],
})
export class FolderComponent implements OnInit {
  @Input() isShow: boolean;
  @Input() folderInfo: FolderInfo;
  @Output() showChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  public onBtnClick() {
    this.isShow = !this.isShow;
    this.showChange.emit(this.isShow);
  }
}
