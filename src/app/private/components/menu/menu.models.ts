export interface IMenuItem {
  text: string;
  link: string;
  id: string;
}

export const MENU_ITEMS: IMenuItem[] = [
  {
    text: 'Комедия',
    link: '/private/comedy',
    id: 'comedy',
  },
  {
    text: 'Мелодрама',
    link: '/private/melodrama',
    id: 'melodrama',
  },
  {
    text: 'Фантастика',
    link: '/private/fantasy',
    id: 'fantasy',
  },
  {
    text: 'Боевик',
    link: '/private/action',
    id: 'action',
  },
  {
    text: 'Триллер',
    link: '/private/thriller',
    id: 'thriller',
  },
  {
    text: 'Детектив',
    link: '/private/detective',
    id: 'detective',
  },
];
