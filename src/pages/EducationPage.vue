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
    <div class="megaclass" >
      <div class="megaclass__title">УРОКИ</div>
      <div class="card" >
        <div class="card__body">
          <img class="card__img" src="https://i.pinimg.com/736x/86/9f/a4/869fa4bb5d26d7ae9a9115d0bef8a536.jpg" alt=""/>
          <div class="card__title">Название</div>
          <div class="card__subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

let educationTitle = [
  {
    id: 1,
    title: "УРОКИ В ШКОЛАХ",
    src: ["https://i.pinimg.com/736x/86/9f/a4/869fa4bb5d26d7ae9a9115d0bef8a536.jpg", "https://i.pinimg.com/736x/86/9f/a4/869fa4bb5d26d7ae9a9115d0bef8a536.jpg", "https://i.pinimg.com/736x/86/9f/a4/869fa4bb5d26d7ae9a9115d0bef8a536.jpg"],
    subTitle: ["НАЗВАНИЕ", "НАЗВАНИЕ", "НАЗВАНИЕ"],
    subText: ["Lorem ipsum dolor sit amet, consectetuer adipiscing elit", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"],
  },
  {
    id: 2,
    title: "ЛЕКЦИИ",
    src: ["https://i.pinimg.com/736x/60/c0/2c/60c02c7e521aaf2335bf20fc4391f5f0.jpg", "https://i.pinimg.com/736x/60/c0/2c/60c02c7e521aaf2335bf20fc4391f5f0.jpg", "https://i.pinimg.com/736x/60/c0/2c/60c02c7e521aaf2335bf20fc4391f5f0.jpg"],
    subTitle: ["НАЗВАНИЕ", "НАЗВАНИЕ", "НАЗВАНИЕ"],
    subText: ["Lorem ipsum dolor sit amet, consectetuer adipiscing elit", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"],
  },
  {
    id: 3,
    title: "ВЫСТАВКИ",
    src: ["https://i.pinimg.com/736x/97/59/0f/97590ffa2b99c4e58dc5e15913063268.jpg", "https://i.pinimg.com/736x/97/59/0f/97590ffa2b99c4e58dc5e15913063268.jpg", "https://i.pinimg.com/736x/97/59/0f/97590ffa2b99c4e58dc5e15913063268.jpg"],
    subTitle: ["НАЗВАНИЕ", "НАЗВАНИЕ", "НАЗВАНИЕ"],
    subText: ["Lorem ipsum dolor sit amet, consectetuer adipiscing elit", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"],
  },
  {
    id: 4,
    title: "ФЕСТИВАЛИ",
    src: ["https://i.pinimg.com/736x/e7/15/68/e715686069b7d9763772ff91e2c3696b.jpg", "https://i.pinimg.com/736x/e7/15/68/e715686069b7d9763772ff91e2c3696b.jpg", "https://i.pinimg.com/736x/e7/15/68/e715686069b7d9763772ff91e2c3696b.jpg"],
    subTitle: ["НАЗВАНИЕ", "НАЗВАНИЕ", "НАЗВАНИЕ"],
    subText: ["Lorem ipsum dolor sit amet, consectetuer adipiscing elit", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"],
  },
  {
    id: 5,
    title: "ПРОЕКТЫ",
    src: ["https://i.pinimg.com/736x/ff/39/57/ff3957fb5a8e174bedb846296d0d863f.jpg", "https://i.pinimg.com/736x/ff/39/57/ff3957fb5a8e174bedb846296d0d863f.jpg", "https://i.pinimg.com/736x/ff/39/57/ff3957fb5a8e174bedb846296d0d863f.jpg"],
    subTitle: ["НАЗВАНИЕ", "НАЗВАНИЕ", "НАЗВАНИЕ"],
    subText: ["Lorem ipsum dolor sit amet, consectetuer adipiscing elit", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"],
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
    margin-top: 70px;
  }
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &__body{
    width: 80%;
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