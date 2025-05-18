import { defineStore } from 'pinia'

const MENU = [
    { title: 'Статьи', path: '/articles', children: [
        { title: 'Начинающим', path: '/articles/beginner' },
        { title: 'Породы собак', path: '/articles/breeds' },
        { title: 'Содержание, уход, кормление, здоровье', path: '/articles/care' },
        { title: 'Воспитание, дрессировка, спорт, отдых', path: '/articles/training' },
        { title: 'Собачьи профессии', path: '/articles/professions' },
        { title: 'Выставки и разведение', path: '/articles/exhibitions' },
        { title: 'Проблемы, приюты, конфликты', path: '/articles/problems' },
        { title: 'Истории о собаках и людях', path: '/articles/stories' },
        { title: 'Социальные проекты', path: '/articles/projects' },
        { title: 'Собаки в истории', path: '/articles/history' },
        { title: 'Рассказы, рисунки, творчество', path: '/articles/art' }
        ]
    },
    { title: 'События', path: '/events', children: [
        { title: 'Текущие', path: '/events/current' },
        { title: 'Будущие', path: '/events/future' },
        { title: 'Прошедшие', path: '/events/past' }
        ]
    },
    { title: 'Журнал', path: '/journal', children: [
        { title: 'О журнале', path: '/journal/about' },
        { title: 'Подписка', path: '/journal/subscription' },
        { title: 'Где читать журнал бесплатно', path: '/journal/read' },
        { title: 'Где купить журнал', path: '/journal/buy' },
        { title: 'Все выпуски журнала', path: '/journal/releases' },
        { title: 'Фотогалерея', path: '/journal/photos' },
        { title: 'Видео', path: '/journal/videos' },
        { title: 'Подкасты', path: '/journal/podcasts' }
        ]
    },
    { title: 'Просвещение', path: '/education' , children: [
        { title: 'Уроки в школах', path: '/education/at-school' },
        { title: 'Лекции', path: '/education/lections' },
        { title: 'Выставки', path: '/education/exhibitions' },
        { title: 'Фестивали', path: '/education/festivals' },
        { title: 'Проекты', path: '/education/projects' }
        ]

    },
    { title: 'Сотрудничество', path: '/cooperation' , children: [
        { title: 'Разместите у нас свою рекламу', path: '/cooperation/advertising' },
        { title: 'Станьте нашим партнером или спонсором ', path: '/cooperation/partnership' },
        { title: 'Возьмите бесплатные журналы для вашей организации ', path: '/cooperation/free' },
        { title: 'Пригласите нас прочитать лекцию для взрослых или детей', path: '/cooperation/lection' },
        { title: 'Станьте нашим автором или экспертом', path: '/cooperation/writer' },
        { title: 'Пройдите у нас студенческую практику', path: '/cooperation/practice' },
        { title: 'Станьте частью нашей команды', path: '/cooperation/employment' }
        ]

    },
    { title: 'О нас', path: '/about' , children: [
        { title: 'Миссия', path: '/about/mission' },
        { title: 'История', path: '/about/history' },
        { title: 'Наша команда', path: '/about/team' },
        { title: 'Фотосъемка собак', path: '/about/photography' },
        { title: 'Фотошкола', path: '/about/photo-school' }
        ]

    },
    { title: 'Контакты', path: '/contacts' , children: [
        { title: 'Контакты', path: '/contacts/cpntacts' },
        { title: 'Мы в социальных сетях', path: '/contacts/socials' },
        { title: 'Рассылка', path: '/contacts/mailing' }
        ]

    },
]

export const useMenuStore = defineStore('menu', {
  state: () => ({
    items: MENU,
    activePath: '/'
  }),
  actions: {
    setActive(path) {
      this.activePath = path
    }
  }
})