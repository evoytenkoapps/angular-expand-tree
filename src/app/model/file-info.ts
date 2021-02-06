export interface FileInfo {
  name: string;
  type: string;
}

export interface FolderInfo {
  name: string;
  type: string;
  children: FolderInfo[] | FileInfo[];
}
