<template>
  <h1>Ваше пиво на сегодня!</h1>
  <div class="beer">
    <div><img src="https://thumbs.dreamstime.com/b/%D1%80%D0%B0%D0%B7%D0%BB%D0%B8%D1%87%D0%BD%D1%8B%D0%B5-%D0%B2%D0%B8%D0%B4%D1%8B-%D0%BF%D0%B8%D0%B2%D0%B0-196928712.jpg" alt=""></div>
    <div class="info beer_info">
      <div><strong>Название: </strong>{{beer.name}}</div>
      <div><strong>Бренд: </strong>{{beer.brand}}</div>
      <div><strong>Тип: </strong>{{beer.style}}</div>
      <div><strong>Крепкость: </strong>{{beer.alcohol}}</div>
      <div><strong>Горечь: </strong>{{beer.ibu}}</div>
      <div><strong>БЖУ: </strong>{{beer.blg}}</div>
      <div><strong>Хмель: </strong>{{beer.hop}}</div>
      <div><strong>Солод: </strong>{{beer.malts}}</div>
      <div><strong>Дрожжи: </strong>{{beer.yeast}}</div>
    </div>
  </div>
  <MyButton @click="$emit('change_beer')" style="width: 100%">Хочу другое!</MyButton>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
export default {
  name: "Beer",
  components: {MyButton},
  props:{
    beer:{
      type:Object,
      required: true
    }
  }
}
</script>

<style scoped>
.beer{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  justify-items: left;
  align-items: center;
}

.beer img{
  width: 100%;
}

@media(max-width: 564px){
  .beer{
    grid-template-columns: 1fr;
    justify-items: left;
    align-items: center;
  }

  .beer img{
    width: 100%;
  }
}
</style>