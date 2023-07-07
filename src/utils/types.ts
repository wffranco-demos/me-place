export interface ActivableItem {
  draft?: boolean;
  publishDate?: Date;
  expirationDate?: Date;
}

export type ClassList = string | {[key: string]: boolean} | ClassList[];
