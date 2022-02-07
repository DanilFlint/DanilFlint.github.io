<template>
  <div class="navbar">
    <div class="title" @click="$router.push('/')">Пивной советчик</div>
    <div class="navbar__btns">
      <MyButton @click="$router.push('/')">О приложении</MyButton>
      <MyButton @click="$router.push('/profile')" style="margin-left: 5px">Личный кабинет</MyButton>
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";
export default {
  components: {MyButton}
}
</script>

<style scoped>
.navbar{
  height: 70px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.navbar__btns{
  margin-left: auto;
}

.title{
  display: grid;
  align-content: center;
  font-size: 30px;
}

@media(max-width: 564px){
  .navbar{
    grid-template-columns: 1fr;
    height: min-content;
  }

  .title{
    justify-content: center;
  }

  .navbar__btns{
    display: grid;
    margin-left: initial;
    height: max-content;
    justify-items: center;
  }
}
</style>