import { defineStore } from 'pinia'

const MENU = [
    { title: 'Статьи', path: '/articles', children: [
        { title: 'Начинающему собаководу', path: '/articles?tag=beginner' },
        { title: 'Породы собак', path: '/articles?tag=breeds' },
        { title: 'Содержание, уход, кормление, здоровье', path: '/articles?tag=care' },
        { title: 'Воспитание, дрессировка, спорт, отдых', path: '/articles?tag=training' },
        { title: 'Собачьи профессии', path: '/articles?tag=professions' },
        { title: 'Выставки и разведение', path: '/articles?tag=exhibitions' },
        { title: 'Проблемы, приюты, конфликты', path: '/articles?tag=problems' },
        { title: 'Истории о собаках и людях', path: '/articles?tag=stories' },
        { title: 'Социальные проекты', path: '/articles?tag=projects' },
        { title: 'Собаки в истории', path: '/articles?tag=history' },
        { title: 'Рассказы, рисунки, творчество', path: '/articles?tag=art' }
        ]
    },
    { title: 'События', path: '/events', children: [
        { title: 'Текущие', path: '/events?tag=current' },
        { title: 'Будущие', path: '/events?tag=future' },
        { title: 'Прошедшие', path: '/events?tag=past' }
        ]
    },
    { title: 'Журнал', path: '/journal', children: [
        { title: 'О журнале', path: '/journal#about' },
        { title: 'Подписка', path: '/journal#subscription' },
        { title: 'Где читать журнал бесплатно', path: '/journal#read' },
        { title: 'Где купить журнал', path: '/journal#buy' },
        { title: 'Все выпуски журнала', path: '/journal#all' },
        { title: 'Фотогалерея', path: '/journal#photo' },
        { title: 'Видео', path: '/journal#video' },
        { title: 'Подкасты', path: '/journal#video' }
        ]
    },
    { title: 'Просвещение', path: '/education' , children: [
        { title: 'Уроки в школах', path: '/education#schools' },
        { title: 'Лекции', path: '/education#lections' },
        { title: 'Выставки', path: '/education#exhibitions' },
        { title: 'Фестивали', path: '/education#festivals' },
        { title: 'Проекты', path: '/education#projects' }
        ]

    },
    { title: 'Сотрудничество', path: '/cooperation' , children: [
        { title: 'Разместите у нас свою рекламу', path: '/cooperation#advertising' },
        { title: 'Станьте нашим партнером или спонсором ', path: '/cooperation#partners' },
        { title: 'Возьмите бесплатные журналы для вашей организации ', path: '/cooperation#free-magazines' },
        { title: 'Пригласите нас прочитать лекцию для взрослых или детей', path: '/cooperation#lectures' },
        { title: 'Станьте нашим автором или экспертом', path: '/cooperation#authors' },
        { title: 'Пройдите у нас студенческую практику', path: '/cooperation#internship' },
        { title: 'Станьте частью нашей команды', path: '/cooperation#team' }
        ]

    },
    { title: 'О нас', path: '/about' , children: [
        { title: 'Миссия', path: '/about#mission' },
        { title: 'История', path: '/about#history' },
        { title: 'Наша команда', path: '/about#team' },
        { title: 'Фотосъемка собак', path: '/about#photoshoot' },
        { title: 'Фотошкола', path: '/about#photoschool' }
        ]

    },
    { title: 'Контакты', path: '/contacts' , children: [
        { title: 'Контакты', path: '/contacts#contacts' },
        { title: 'Мы в социальных сетях', path: '/contacts#socials' },
        { title: 'Рассылка', path: '/contacts#mailing' }
        ]

    }
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