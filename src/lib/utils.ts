export type TNote = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  text: string;
  html: string;
};

export type TUser = {
  name: string;
  image: string;
  email: string;
};

export const notes: TNote[] = Array.from({ length: 10 }).map((_, j) => ({
  id: `${j + 1}`,
  text: 'Note Content',
  title: `Note ${j + 1}`,
  html: '<h2>Note Content</h2>',
  updatedAt: new Date(),
  createdAt: new Date(),
}));

export const TITLE_CLASS =
  'h-12 flex-1 line-clamp-1 text-4xl font-bold leading-tight';
