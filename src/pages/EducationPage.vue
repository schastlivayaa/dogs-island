<template>
  <div class="education">
    <div class="education__title">
      <div class="education__title__text">ПРОСВЕЩЕНИЕ</div>
      <div class="education__title__btns">
        <button class="btn">Уроки в школах</button>
        <button class="btn">Лекции</button>
        <button class="btn">Выставки</button>
        <button class="btn">Фестивали</button>
        <button class="btn">Проекты</button>
      </div>
    </div>
    <div class="megaclass" v-for="edu in educationData" :key="edu.id">
      <div class="megaclass__title">{{edu.title}}</div>
      <div class="card">
        <div class="card__body" v-for="subEdu in edu.subData" :key="subEdu.id">
          <img class="card__img" :src="subEdu.photo" alt=""/>
          <div class="card__title">{{subEdu.subTitle}}</div>
          <div class="card__subtitle">{{subEdu.subText}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

let educationData = [
  {
    id: 1,
    title: "УРОКИ В ШКОЛАХ",
    subData: [
      {
        id: 1,
        photo: "https://i.pinimg.com/736x/86/9f/a4/869fa4bb5d26d7ae9a9115d0bef8a536.jpg",
        subTitle: "название",
        subText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
      },
      {
        id: 2,
        photo: "https://i.pinimg.com/736x/86/9f/a4/869fa4bb5d26d7ae9a9115d0bef8a536.jpg",
        subTitle: "название",
        subText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
      },
      {
        id: 3,
        photo: "https://i.pinimg.com/736x/86/9f/a4/869fa4bb5d26d7ae9a9115d0bef8a536.jpg",
        subTitle: "название",
        subText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
      },
    ]
  },
  {
    id: 2,
    title: "ЛЕКЦИИ",
    subData: [
      {
        id: 1,
        photo: "https://i.pinimg.com/736x/a5/87/57/a58757fdfdf0cdf18f38dfa48749d199.jpg",
        subTitle: "название",
        subText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
      },
      {
        id: 2,
        photo: "https://i.pinimg.com/736x/a5/87/57/a58757fdfdf0cdf18f38dfa48749d199.jpg",
        subTitle: "название",
        subText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
      },
      {
        id: 3,
        photo: "https://i.pinimg.com/736x/a5/87/57/a58757fdfdf0cdf18f38dfa48749d199.jpg",
        subTitle: "название",
        subText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
      }
      ]
    },
  {
    id: 3,
    title: "ВЫСТАВКИ",
    subData: [
      {
        id: 1,
        photo: "https://i.pinimg.com/736x/94/a4/16/94a416435a9f7cef0d947dc42b20e19b.jpg",
        subTitle: "название",
        subText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
      },
      {
        id: 2,
        photo: "https://i.pinimg.com/736x/94/a4/16/94a416435a9f7cef0d947dc42b20e19b.jpg",
        subTitle: "название",
        subText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
      },
      {
        id: 3,
        photo: "https://i.pinimg.com/736x/94/a4/16/94a416435a9f7cef0d947dc42b20e19b.jpg",
        subTitle: "название",
        subText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
      }
    ]
  },
  {
    id: 4,
    title: "ФЕСТИВАЛИ",
    subData: [
      {
        id: 1,
        photo: "https://i.pinimg.com/736x/35/97/0e/35970ebc4f444ecfccdb3590d06d6340.jpg",
        subTitle: "название",
        subText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
      },
      {
        id: 2,
        photo: "https://i.pinimg.com/736x/35/97/0e/35970ebc4f444ecfccdb3590d06d6340.jpg",
        subTitle: "название",
        subText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
      },
      {
        id: 3,
        photo: "https://i.pinimg.com/736x/35/97/0e/35970ebc4f444ecfccdb3590d06d6340.jpg",
        subTitle: "название",
        subText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
      }
    ]
  },
  {
    id: 5,
    title: "ПРОЕКТЫ",
    subData: [
      {
        id: 1,
        photo: "https://i.pinimg.com/736x/ff/39/57/ff3957fb5a8e174bedb846296d0d863f.jpg",
        subTitle: "название",
        subText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
      },
      {
        id: 2,
        photo: "https://i.pinimg.com/736x/ff/39/57/ff3957fb5a8e174bedb846296d0d863f.jpg",
        subTitle: "название",
        subText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
      },
      {
        id: 3,
        photo: "https://i.pinimg.com/736x/ff/39/57/ff3957fb5a8e174bedb846296d0d863f.jpg",
        subTitle: "название",
        subText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
      }
    ]
  },
]

</script>

<style scoped lang="scss">

.education {
  background-color: #E2EDF6;

  &__title {

    &__text {
      font-family: Bebas Neue Cyrillic, serif;
      font-weight: 400;
      font-size: 48px;
      line-height: 100%;
      letter-spacing: 0;
      text-align: center;
      color: black;
      padding-top: 50px;
      margin-bottom: 10px;
    }

    &__btns {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

.megaclass {

  &__title {
    font-family: Bebas Neue Cyrillic, serif;
    font-weight: 400;
    font-size: 48px;
    line-height: 100%;
    letter-spacing: 0;
    text-align: center;
    color: #D24B35;
    margin-top: 90px;
    margin-bottom: 20px;
  }
}

.card {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  &__body {
    width: 444px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px;
  }

  &__img {
    max-width: 444px;
    max-height: 296px;
    min-width: 444px;
    min-height: 296px;
  }

  &__title {
    font-family: Bebas Neue Cyrillic, serif;
    font-weight: 400;
    font-size: 48px;
    line-height: 100%;
    letter-spacing: 0;
    color: #D24B35;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  &__subtitle {
    font-family: Roboto, serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: 0;
    color: #1C4478;
  }
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  font-family: Roboto, serif;
  font-weight: 300;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
  margin: 10px;
  height: 24px;
}

</style>