import { AsyncTask, PaginatedRequest, PaginatedResponse, sleep } from '../core'


export interface Course {
  id: number
  title: string
  subtitle: string
  description: string
  coverImageUrl: string

}

export interface GetCoursesListRequest
  extends PaginatedRequest
{
}

export interface GetCoursesListResponse
  extends PaginatedResponse<Course>
{
}

export class GetCoursesListTask
  extends AsyncTask<
    GetCoursesListRequest,
    GetCoursesListResponse
  > {
  protected async onWork(
    request: GetCoursesListRequest
  ): Promise<GetCoursesListResponse> {
    await sleep(1000)

    const courses: Course[] = [
      {
        id: 0,
        title: 'Пранама-мантра',
        subtitle: '',
        description: 'Pranama',
        coverImageUrl: 'https://sun9-80.userapi.com/impf/c840438/v840438487/1b36/0KaFwO7dpco.jpg?size=604x380&quality=96&sign=17a0e7c4e5233288c66b5c9172801240&type=album'
      },
      {
        id: 1,
        title: 'Первое посвящение',
        subtitle: '',
        description: 'First Initiation',
        coverImageUrl: 'https://back2godhead.com/wp-content/uploads/2012/11/099_1975_10-02-27.jpg'
      },
      {
        id: 2,
        title: 'Второе посвящение',
        subtitle: '',
        description: 'Second initiation',
        coverImageUrl: 'https://girirajswami.com/blog/wp-content/uploads/2012/07/SP_init.jpg'
      },
      {
        id: 3,
        title: 'Поклонение Божествам',
        subtitle: '',
        description: 'Archana',
        coverImageUrl: 'http://www.prabhupadaconnect.com/Srila-Prabhupada-offering-ghee-lamp-to-Radha-Gokluananda-small.jpg'
      },
      {
        id: 4,
        title: 'Бхактивайбхава',
        subtitle: '',
        description: 'Bhakti-vaibhava',
        coverImageUrl: 'https://prabhupadabooks.com/images/bhagavatam_big.jpg'
      },
    ]

    const items = courses.filter(
      x => x.id >= request.offset &&
           x.id <  request.offset + request.count)

    return {
      total: items.length,
      items: items
    }
  }
}
