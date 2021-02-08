import { FolderInfo } from './file-info';

export enum FileTypes {
  FILE = 'file',
  FOLDER = 'folder',
}

export interface FilesData extends FolderInfo {
  tree: [FolderInfo];
}
