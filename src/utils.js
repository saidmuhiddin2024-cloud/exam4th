export const money = (value) => `${value.toLocaleString('ru-RU')} ₽`
// export const NAV = [...]: Массиви константӣ мебошад, ки сохтори менюи сайтро нигоҳ медорад.
export const NAV = [
  { to: '/catalog', key: 'catalog' },
  { to: '/used', key: 'used' },
  { to: '/credit', key: 'credit' },
  { to: '/taxi', key: 'taxi' }
]
// { to: '...', key: '...' }: Ҳар як объект як банди менюро нишон медиҳад:
// to: Суроғаи саҳифа (URL path), ки барои Link ё NavLink дар React Router истифода мешавад.
// key: Калиди беназир (unique key) барои истифода дар .map() ё барои тарҷумаи матни меню (i18n).