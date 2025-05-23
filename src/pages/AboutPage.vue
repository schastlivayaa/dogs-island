<template>
  <div class="container">
    <div class="about_us">
      <h2 class="about_us__header">O НАС</h2>

      <div class="about_us__mission" id="mission">
        <h3 class="about_us__mission__header">МИССИЯ</h3>
        <div class="about_us__mission__body paragraph">А также элементы политического процесса формируют глобальную экономическую
          сеть и при этом — описаны максимально подробно. Таким образом, существующая теория позволяет выполнить важные
          задания по разработке экспериментов, поражающих по своей масштабности и грандиозности. Кстати, тщательные
          исследования конкурентов неоднозначны и будут подвергнуты целой серии независимых исследований. Господа,
          убеждённость некоторых оппонентов позволяет
        </div>
      </div>

      <div class="about_us__history" id="history">
        <h3 class="about_us__history__header">ИСТОРИЯ</h3>
        <div class="about_us__history__body">
          <img
              class="about_us__history__body__img"
               src="https://i.pinimg.com/736x/62/3c/26/623c26317f86908eafb762d391336938.jpg"
              alt="А?"
          >
          <div class="about_us__history__body__text paragraph">А также элементы политического процесса формируют глобальную
            экономическую сеть и при этом — описаны максимально подробно. Таким образом, существующая теория позволяет
            выполнить важные задания по разработке экспериментов, поражающих по своей масштабности и
          </div>
        </div>
      </div>
    </div>

    <div class="out_team" id="team">
      <h3 class="out_team__header">НАША КОМАНДА</h3>
      <div class="out_team__members">
        <div class="card" v-for="teammate in team" :key="teammate.id">
          <div class="card__body__case">
            <img class="card__body__img" :src="teammate.src"/>
          </div>
          <div class="card__body__name">{{ teammate.fullName }}</div>
          <div class="card__body__position">{{ teammate.position }}</div>
        </div>
      </div>
    </div>

    <div class="photo">
      <div class="photo__dogs" id="photoshoot">
        <h3 class="photo__dogs__header">ФОТОСЪЁМКА СОБАК</h3>
        <div class="photo__dogs__text paragraph">А также элементы политического процесса формируют глобальную экономическую сеть
          и при этом — описаны максимально подробно. Таким образом, существующая теория позволяет выполнить важные
          задания по разработке экспериментов, поражающих по своей масштабности и грандиозности. Кстати, тщательные
          исследования конкурентов неоднозначны и будут подвергнуты целой серии независимых исследований. Господа,
          убеждённость некоторых оппонентов позволяет
        </div>
      </div>
      
      <div class="photo__school" id="photoschool">
        <h3 class="photo__school__header">ФОТОШКОЛА</h3>
        <div class="photo__school__text paragraph">А также элементы политического процесса формируют глобальную экономическую
          сеть и при этом — описаны максимально подробно. Таким образом, существующая теория позволяет выполнить
          важные задания по разработке экспериментов, поражающих по своей масштабности и грандиозности. Кстати,
          тщательные исследования конкурентов неоднозначны и будут подвергнуты целой серии независимых исследований.
          Господа, убеждённость некоторых оппонентов позволяет
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

let team = [
  {
    id: 1,
    src: "https://i.pinimg.com/736x/ac/19/2d/ac192df1111887e586f717288d9357a9.jpg",
    fullName: "Сэр Генрих фон Штернберг",
    position: "Директор"
  },
  {
    id: 2,
    src: "https://i.pinimg.com/736x/cb/40/2f/cb402fc004ffe14913e295aae8322065.jpg",
    fullName: "Артур Викторович Громов",
    position: "Акционер"
  },
  {
    id: 3,
    src: "https://i.pinimg.com/736x/60/92/d3/6092d3f8ea619cf474768bc4a1882080.jpg",
    fullName: "Элеонора де Монферрат",
    position: "Глава департамента элегантности"
  },
  {
    id: 4,
    src: "https://i.pinimg.com/736x/b0/2b/0a/b02b0a29f4580da7a5bd201715ee3776.jpg",
    fullName: "Граф Дмитрий Тенебрис",
    position: "Директор по теневым операциям",
  },
  {
    id: 5,
    src: "https://i.pinimg.com/736x/87/50/55/875055869e25f0fb1e71ec4752342a76.jpg",
    fullName: "Карлос де ла Гардия",
    position: "Начальник контрразведки",
  },
  {
    id: 6,
    src: "https://i.pinimg.com/736x/f3/85/f7/f385f72a115af3af66fa06ef1847f850.jpg",
    fullName: "Борис Игнатьевич Рык",
    position: "Программист",
  }
]
</script>

<style scoped lang="scss">
@use '@/assets/styles/abstracts/constants' as *;

.container {

}

.about_us {
  background-color: $color-medium;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__header {
    padding: 3rem 0 8rem 0;
    color: $color-dark;
    text-align: center;
  }

  &__mission {
    background-color: #fff;
    width: 90%;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    padding: 3rem;

    &__header {
      color: $color-additional;
      font-size: 4.8rem;
    }

    &__body {
      color: $color-dark;
    }
  }

  &__history {
    margin-top: 80px;
    width: 90%;
    text-align: center;

    &__header {
      color: $color-additional;
      font-size: 4.8rem;
    }

    &__body {
      display: flex;
      padding: 2rem;
      margin-bottom: 8rem;

      &__img {
        min-width: 720px;
        max-height: 231px;
        object-fit: cover;
        object-position: top;
      }

      &__text {
        padding: 10px;
        color: $color-dark;
        text-align: start;
        margin-left: 15px;
      }
    }
  }
}

.out_team {
  background-color: $color-light;
  display: flex;
  flex-direction: column;

  &__header {
    font-size: 4.8rem;
    text-align: center;
    color: $color-additional;
    padding-top: 30px;
    margin-bottom: 20px
  }

  &__members {
    width: 100%;
    display: flex;
    flex-direction: row;
  }
}

.card {
  display: flex;
  flex-direction: column;
  align-content: start;
  justify-content: space-around;
  width: 100%;

  &__body {
    display: flex;
    flex-direction: column;

    &__case {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__img {
      min-width: 210px;
      max-width: 210px;
      min-height: 320px;
      max-height: 320px;
    }

    &__name {
      display: flex;
      padding: 3px;
      font-family: Bebas Neue Cyrillic, serif;
      font-weight: 400;
      font-size: 48px;
      text-align: center;
      overflow-wrap: break-word;
    }

    &__position {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      font-size: 3.2rem;
      text-align: center;
      overflow-wrap: break-word;
    }
  }
}

.photo {
  background-color: $color-medium;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 8rem;
  padding-bottom: 8rem;
  text-align: center;

  &__dogs{
    background-color: #fff;
    width: 90%;

    &__header {
      font-size: 4.8rem;
      padding: 1.5rem;
      color: $color-additional;
    }

    &__text{
      text-align: center;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      color: $color-dark;
    }
  }

  &__school{
    background-color: #fff;
    width: 90%;
    margin-top: 8rem;

    &__header {
      font-size: 4.8rem;
      padding: 1.5rem;
      color: $color-additional;
    }

    &__text{
      text-align: center;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      color: $color-dark;
    }
  }
}
</style>