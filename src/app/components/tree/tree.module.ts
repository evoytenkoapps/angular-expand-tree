import { NgModule } from '@angular/core';
import { FileComponent } from '../file/file.component';
import { FolderComponent } from '../folder/folder.component';
import { TreeComponent } from './tree.component';
import { TreeNodeComponent } from '../tree-node/tree-node.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FileComponent,
    FolderComponent,
    TreeComponent,
    TreeNodeComponent,
  ],
  exports: [
    TreeComponent
  ],
})
export class TreeModule {}
