import { NgModule } from '@angular/core';
import { FileComponent } from '../file/file.component';
import { FolderComponent } from '../folder/folder.component';
import { TreeComponent } from './tree.component';
import { TreeNodeComponent } from '../tree-node/tree-node.component';

@NgModule({
  imports: [],
  declarations: [
    FileComponent,
    FolderComponent,
    TreeComponent,
    TreeNodeComponent,
  ],
  exports: [],
})
export class TreeModule {}
