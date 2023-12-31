import { Course, Group } from './courses'

export const courses: Course[] = [
  {
    id: 'QJuPZr',
    title: 'Пранама-мантра',
    subtitle: '',
    description: 'Pranama',
    coverImageUrl: 'https://sun9-80.userapi.com/impf/c840438/v840438487/1b36/0KaFwO7dpco.jpg?size=604x380&quality=96&sign=17a0e7c4e5233288c66b5c9172801240&type=album'
  },
  {
    id: 'HlJqjE',
    title: 'Первое посвящение',
    subtitle: '',
    description: 'First Initiation',
    coverImageUrl: 'https://back2godhead.com/wp-content/uploads/2012/11/099_1975_10-02-27.jpg'
  },
  {
    id: 'sNHRxm',
    title: 'Второе посвящение',
    subtitle: '',
    description: 'Second initiation',
    coverImageUrl: 'https://girirajswami.com/blog/wp-content/uploads/2012/07/SP_init.jpg'
  },
  {
    id: 'S0b4m4',
    title: 'Поклонение Божествам',
    subtitle: '',
    description: 'Archana',
    coverImageUrl: 'http://www.prabhupadaconnect.com/Srila-Prabhupada-offering-ghee-lamp-to-Radha-Gokluananda-small.jpg'
  },
  {
    id: 'Lqk4Ql',
    title: 'Бхактивайбхава',
    subtitle: '',
    description: 'Bhakti-vaibhava',
    coverImageUrl: 'https://prabhupadabooks.com/images/bhagavatam_big.jpg'
  },
]


export const groups: Group[] = [
  {
    id: 'abcdef',
    courseId: 'QJuPZr',
    name: 'Пранама (Матаджи)',
    couratorName: 'Ямуна дд',
    couratorAvatarUrl: 'http://placekitten.com/g/200/200',
    startsAt: 17039772
  },
  {
    id: 'bsdef',
    courseId: 'QJuPZr',
    name: 'Пранама (Прабху)',
    couratorName: 'Кришна дас',
    couratorAvatarUrl: 'http://placekitten.com/g/200/300',
    startsAt: 17039772
  }
]

export const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu gravida est, a tempor enim. Maecenas mollis tellus vel lorem dictum, ' +
  'sit amet rhoncus odio hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ' +
  'dolor lacus, elementum accumsan mauris quis, consectetur tincidunt ipsum. Praesent hendrerit nunc ac luctus malesuada. Aenean malesuada ' +
  'in ex nec pretium. Phasellus laoreet erat vitae odio fringilla interdum. Cras nec volutpat nisi, sit amet auctor ipsum. Mauris pharetra ' +
  'mi vitae fermentum tincidunt.'
