export interface FileInfo {
  name: string;
  type: string;
}

export interface FolderInfo extends FileInfo {
  children: FolderInfo[] | FileInfo[];
}
