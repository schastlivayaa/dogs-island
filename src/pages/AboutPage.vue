<template>
  <div class="container">
    <div class="about_us">
      <div class="about_us__header">O НАС</div>
      <div class="about_us__mission">
        <div class="about_us__mission__header">МИССИЯ</div>
        <div class="about_us__mission__body">А также элементы политического процесса формируют глобальную экономическую
          сеть и при этом — описаны максимально подробно. Таким образом, существующая теория позволяет выполнить важные
          задания по разработке экспериментов, поражающих по своей масштабности и грандиозности. Кстати, тщательные
          исследования конкурентов неоднозначны и будут подвергнуты целой серии независимых исследований. Господа,
          убеждённость некоторых оппонентов позволяет
        </div>
      </div>
      <div class="about_us__history">
        <div class="about_us__history__header">ИСТОРИЯ</div>
        <div class="about_us__history__body">
          <img
              class="about_us__history__body__img"
               src="https://i.pinimg.com/736x/62/3c/26/623c26317f86908eafb762d391336938.jpg"
              alt="А?"
          >
          <div class="about_us__history__body__text">А также элементы политического процесса формируют глобальную
            экономическую сеть и при этом — описаны максимально подробно. Таким образом, существующая теория позволяет
            выполнить важные задания по разработке экспериментов, поражающих по своей масштабности и
          </div>
        </div>
      </div>
    </div>
    <div class="out_team">
      <div class="out_team__header">НАША КОМАНДА</div>
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
      <div class="photo__dogs">
        <div class="photo__dogs__header">ФОТОСЪЁМКА СОБАК</div>
        <div class="photo__dogs__text">А также элементы политического процесса формируют глобальную экономическую сеть
          и при этом — описаны максимально подробно. Таким образом, существующая теория позволяет выполнить важные
          задания по разработке экспериментов, поражающих по своей масштабности и грандиозности. Кстати, тщательные
          исследования конкурентов неоднозначны и будут подвергнуты целой серии независимых исследований. Господа,
          убеждённость некоторых оппонентов позволяет
        </div>
      </div>
      <div class="photo__school">
        <div class="photo__school__header">ФОТОШКОЛА</div>
        <div class="photo__school__text">А также элементы политического процесса формируют глобальную экономическую
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
.container {

}

.about_us {
  background-color: #E2EDF6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__header {
    color: black;
    font-family: Bebas Neue Cyrillic, serif;
    font-size: 48px;
    font-weight: 400;
    line-height: 100%;
    margin: 30px 0 80px 0;
  }

  &__mission {
    background-color: white;
    width: 90%;
    display: flex;
    flex-direction: column;

    &__header {
      color: #D24B35;
      font-family: Bebas Neue Cyrillic, serif;
      font-weight: 400;
      font-size: 48px;
      line-height: 100%;
      letter-spacing: 0;
      text-align: center;
      margin-top: 20px;
    }

    &__body {
      color: black;
      font-family: Roboto, serif;
      font-weight: 400;
      font-size: 32px;
      line-height: 100%;
      letter-spacing: -1px;
      text-align: center;
      padding: 20px;
    }
  }

  &__history {
    margin-top: 80px;
    width: 90%;

    &__header {
      color: #D24B35;
      font-family: Bebas Neue Cyrillic, serif;
      font-weight: 400;
      font-size: 48px;
      line-height: 100%;
      letter-spacing: 0;
      text-align: center;
    }

    &__body {
      display: flex;
      padding: 20px;
      margin-bottom: 80px;

      &__img {
        min-width: 720px;
        max-height: 231px;
        object-fit: cover;
        object-position: top;;
      }

      &__text {
        padding: 10px;
        color: black;
        font-family: Roboto, serif;
        font-weight: 400;
        font-size: 32px;
        line-height: 100%;
        letter-spacing: 0;
        text-align: start;
        margin-left: 15px;
      }
    }
  }
}

.out_team {
  background-color: white;
  display: flex;
  flex-direction: column;

  &__header {
    font-family: Bebas Neue Cyrillic, serif;
    font-weight: 400;
    font-size: 48px;
    line-height: 100%;
    text-align: center;
    color: #D24B35;
    padding-top: 30px;
    letter-spacing: -1px;
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
      line-height: 100%;
      letter-spacing: 0;
      text-align: center;
      overflow-wrap: break-word;
    }

    &__position {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      font-family: Roboto, serif;
      font-weight: 400;
      font-size: 32px;
      line-height: 100%;
      letter-spacing: 0;
      text-align: center;
      overflow-wrap: break-word;
    }
  }
}

.photo {
  background-color: #D9D9D9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 80px;

  &__dogs{
    background-color: white;
    width: 90%;

    &__header {
      font-family: Bebas Neue Cyrillic,serif;
      font-weight: 400;
      font-size: 48px;
      line-height: 100%;
      letter-spacing: 0;
      text-align: center;
      padding: 15px;
      color: #D24B35;
    }

    &__text{
      font-family: Roboto,serif;
      font-weight: 400;
      font-size: 32px;
      line-height: 100%;
      letter-spacing: 0;
      text-align: center;
      padding: 15px;
      margin-bottom: 15px;
      color: black;
    }
  }

  &__school{
    background-color: white;
    width: 90%;
    margin-top: 80px;
    &__header {
      font-family: Bebas Neue Cyrillic,serif;
      font-weight: 400;
      font-size: 48px;
      line-height: 100%;
      letter-spacing: 0;
      text-align: center;
      padding: 15px;
      color: #D24B35;


    }

    &__text{
      font-family: Roboto,serif;
      font-weight: 400;
      font-size: 32px;
      line-height: 100%;
      letter-spacing: 0;
      text-align: center;
      color: black;
      padding: 15px;
      margin-bottom: 15px;

    }
  }
}
</style>