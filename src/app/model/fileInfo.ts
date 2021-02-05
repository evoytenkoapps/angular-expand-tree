export interface FileInfo {
  name: string;
  type: string;
}

export interface FolderInfo extends FileInfo {
  name: string;
  type: string;
  children: FolderInfo[] | FileInfo[];
}
