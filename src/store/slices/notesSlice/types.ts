export interface INoteView {
  note: string;
  tags: string[];
}

export interface INote extends INoteView {
  id: string;
}
