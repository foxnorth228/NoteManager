export interface INoteView {
  text: string;
  tags: string[];
}

export interface INote extends INoteView {
  id: string;
}
