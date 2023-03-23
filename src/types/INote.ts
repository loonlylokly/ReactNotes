import { ITag } from './ITag';

export interface INote {
  id: string;
  title: string;
  tags: ITag[];
  text: string;
}
