<template>
  <div class="contacts">
    <div class="contact" id="contacts">
      <h2 class="contact__title">контакты</h2>
      <div class="contact__text paragraph">А также элементы политического процесса формируют глобальную экономическую сеть и при
        этом — описаны максимально подробно. Таким образом, существующая теория позволяет выполнить важные задания по
        разработке экспериментов, поражающих по своей масштабности и грандиозности. Кстати, тщательные исследования
        конкурентов неоднозначны и будут подвергнуты целой серии независимых исследований. Господа, убеждённость
        некоторых оппонентов позволяет
      </div>
    </div>
    <div class="media" id="socials">
      <h2 class="media__title">Мы в социальных сетях</h2>
      <div class="media__links">
        <div class="card" v-for="social in socialMedia" :key="social.id">
          <img class="card__img" :src="social.src" alt="socialMediaImg">
          <div class="card__text paragraph">{{ social.description }}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="latter" id="mailing">
    <h2 class="latter__title">РАССЫЛКА</h2>
    <div class="latter__text paragraph">БУДЬТЕ В КУРСЕ НОВОСТЕЙ ИИ НОВЫХ ВЫПУСКОВ
      <input type="email" class="latter__text__email" placeholder="ЭЛЕКТРОННАЯ ПОЧТА"></input>
      <button class="btn btn_bold">ПОДПИСАТЬСЯ</button>
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
@use '@/assets/styles/abstracts/constants' as *;

.contacts {
  background-color: $color-medium;
}

.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  &__title {
    color: $color-additional;
    padding: 3rem;
  }

  &__text {
    width: 87%;
    padding-bottom: 3rem;
    color: $color-dark;
  }
}

.media {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 9rem;

  &__title {
    color: $color-additional;
    padding: 3rem;
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
    max-width: 13rem;
    max-height: 13rem;
    min-height: 13rem;
    min-width: 13rem;
  }

  &__text {
    text-align: center;
    color: $color-dark;
    margin-top: 2rem;
  }
}

.latter {
  &__title {
    padding: 3rem;
    text-align: center;
    color: #D24B35;
  }

  &__text {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 9rem;

    &__email {
      padding: 5px;
      margin: 0 5px 0 5px;
      color: #FFFFFF;
      background-color: #1C4478;

      &::placeholder {
        color: #FFFFFF;
      }
    }
  }
}
</style>