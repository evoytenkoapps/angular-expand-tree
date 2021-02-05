import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreeNodeComponent } from './components/tree-node/tree-node.component';
import { TreeComponent } from './components/tree/tree.component';
import { FolderComponent } from './components/folder/folder.component';
import { FileComponent } from './components/file/file.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeNodeComponent,
    TreeComponent,
    FolderComponent,
    FileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
