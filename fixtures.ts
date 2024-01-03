import { Course, Group } from './courses'

export const courses: Course[] = [
  {
    id: 'a1',
    title: 'Пранама-мантра',
    subtitle: 'Курс для получения пранама-мантры',
    summary: 'Если вы хотите принять прибежище у Е.С. Бхакти Чайтанья Свами Махараджа, тогда вам необходимо ознакомиться с его требованиями к кандидатам на получение пранама-мантры и пройти данный курс',
    description: 'Pranama',
    coverImageUrl: 'https://sun9-80.userapi.com/impf/c840438/v840438487/1b36/0KaFwO7dpco.jpg?size=604x380&quality=96&sign=17a0e7c4e5233288c66b5c9172801240&type=album'
  },
  {
    id: 'a2',
    title: 'Первое посвящение',
    subtitle: '',
    summary: '',
    description: 'First Initiation',
    coverImageUrl: 'https://back2godhead.com/wp-content/uploads/2012/11/099_1975_10-02-27.jpg'
  },
  {
    id: 'a3',
    title: 'Второе посвящение',
    subtitle: '',
    summary: '',
    description: 'Second initiation',
    coverImageUrl: 'https://girirajswami.com/blog/wp-content/uploads/2012/07/SP_init.jpg'
  },
  {
    id: 'a4',
    title: 'Поклонение Божествам',
    subtitle: '',
    summary: '',
    description: 'Archana',
    coverImageUrl: 'https://sastracaksu.nlitn.in/wp-content/uploads/2018/02/Srila-Prabhupada-Praying-to-Radha-Krishna-Deities.jpg'
  },
  {
    id: 'a5',
    title: 'Бхактивайбхава',
    subtitle: '',
    summary: '',
    description: 'Bhakti-vaibhava',
    coverImageUrl: 'https://prabhupadabooks.com/images/bhagavatam_big.jpg'
  },
]


export const groups: Group[] = [
  {
    id: 'abcdef',
    courseId: 'a1',
    name: 'Группа для матаджи',
    couratorName: 'Ямуна дд',
    couratorAvatarUrl: 'https://avatar.iran.liara.run/public/52',
    startsAt: 17039772
  },
  {
    id: 'bsdef',
    courseId: 'a1',
    name: 'Группа для прабху',
    couratorName: 'Кришна дас',
    couratorAvatarUrl: 'https://avatar.iran.liara.run/public/boy',
    startsAt: 17039772
  },
  {
    id: 'fffff',
    courseId: 'a1',
    name: 'Группа 108',
    couratorName: 'Радха дд',
    couratorAvatarUrl: 'https://avatar.iran.liara.run/public/81',
    startsAt: 17139772
  }
]

export const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu gravida est, a tempor enim. Maecenas mollis tellus vel lorem dictum, ' +
  'sit amet rhoncus odio hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ' +
  'dolor lacus, elementum accumsan mauris quis, consectetur tincidunt ipsum. Praesent hendrerit nunc ac luctus malesuada. Aenean malesuada ' +
  'in ex nec pretium. Phasellus laoreet erat vitae odio fringilla interdum. Cras nec volutpat nisi, sit amet auctor ipsum. Mauris pharetra ' +
  'mi vitae fermentum tincidunt.'
