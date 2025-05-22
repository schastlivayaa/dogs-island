<template>
  <div class="contacts">
    <div class="contact">
      <div class="contact__title">контакты</div>
      <div class="contact__text">А также элементы политического процесса формируют глобальную экономическую сеть и при
        этом — описаны максимально подробно. Таким образом, существующая теория позволяет выполнить важные задания по
        разработке экспериментов, поражающих по своей масштабности и грандиозности. Кстати, тщательные исследования
        конкурентов неоднозначны и будут подвергнуты целой серии независимых исследований. Господа, убеждённость
        некоторых оппонентов позволяет
      </div>
    </div>
    <div class="media">
      <div class="media__title">Мы в социальных сетях</div>
      <div class="media__links">
        <div class="card" v-for="social in socialMedia" :key="social.id">
          <img class="card__img" :src="social.src" alt="socialMediaImg">
          <div class="card__text">{{ social.description }}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="latter">
    <div class="latter__title">РАССЫЛКА</div>
    <div class="latter__text">БУДЬТЕ В КУРСЕ НОВОСТЕЙ ИИ НОВЫХ ВЫПУСКОВ
      <div class="latter__text__email">ЭЛЕКТРОННАЯ ПОЧТА</div>
      <button class="latter__text__btn">ПОДПИСАТЬСЯ</button>
    </div>
  </div>
</template>

<script setup lang="ts">

let socialMedia = [
  {
    id: 1,
    src: "https://i.pinimg.com/736x/27/cd/1c/27cd1c1ed447fb2523b1d87002202a0e.jpg",
    description: "ТЕКСТ"
  },
  {
    id: 2,
    src: "https://i.pinimg.com/736x/f3/3f/ad/f33fad5f129e33c474f88d190f032164.jpg",
    description: "ТЕКСТ"
  },
  {
    id: 3,
    src: "https://i.pinimg.com/736x/27/cd/1c/27cd1c1ed447fb2523b1d87002202a0e.jpg",
    description: "ТЕКСТ"
  },
  {
    id: 4,
    src: "https://i.pinimg.com/736x/27/cd/1c/27cd1c1ed447fb2523b1d87002202a0e.jpg",
    description: "ТЕКСТ"
  },
  {
    id: 5,
    src: "https://i.pinimg.com/736x/27/cd/1c/27cd1c1ed447fb2523b1d87002202a0e.jpg",
    description: "ТЕКСТ"
  }
]
</script>

<style scoped lang="scss">
.contacts {
  background-color: #E2EDF6;
}

.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__title {
    font-family: Bebas Neue Cyrillic, serif;
    font-weight: 400;
    font-size: 48px;
    line-height: 100%;
    letter-spacing: 0;
    text-align: center;
    color: #D24B35;
    padding: 30px;
  }

  &__text {
    width: 87%;
    font-family: Roboto, serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: 0;
    text-align: center;
    padding-bottom: 30px;
    color: black;
  }
}

.media {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 90px;

  &__title {
    font-family: Bebas Neue Cyrillic, serif;
    font-weight: 400;
    font-size: 48px;
    line-height: 100%;
    letter-spacing: 0;
    text-align: center;
    color: #D24B35;
    padding: 30px;
  }

  &__links {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 70%;
  }
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  &__img {
    max-width: 130px;
    max-height: 130px;
    min-height: 130px;
    min-width: 130px;
  }

  &__text {
    font-family: Roboto, serif;
    font-weight: 400;
    font-size: 36px;
    line-height: 100%;
    letter-spacing: 0;
    text-align: center;
    color: #000000;
    margin-top: 20px;
  }
}

.latter {
  &__title {
    font-family: Bebas Neue Cyrillic, serif;
    font-weight: 400;
    font-size: 48px;
    line-height: 100%;
    letter-spacing: 0;
    text-align: center;
    color: #D24B35;
  }

  &__text {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    margin-bottom: 40px;
    font-family: Roboto, serif;
    font-weight: 400;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: 0;
    color: #1C4478;

    &__email {
      padding: 5px;
      margin: 0 5px 0 5px;
      color: #FFFFFF;
      background-color: #1C4478;
    }

    &__btn {
      color: #1C4478;
      font-family: Roboto, serif;
      font-weight: 700;
      font-size: 32px;
      line-height: 100%;
      letter-spacing: 0;
      text-align: center;
    }
  }
}
</style>