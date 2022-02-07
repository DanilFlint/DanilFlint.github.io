<template>
  <div>
    <User :user="user"></User>
    <Beer :beer="beer" @change_beer="fetchBeer"></Beer>
  </div>
</template>

<script>
import axios from "axios";
import User from "@/components/User";
import Beer from "@/components/Beer";

export default {
  name: "App",
  components: {Beer, User},
  data(){
    return {
      str: "Welcome!",
      beer:{},
      user:{}
    }
  },
  methods:{
    async fetchBeer(){
      try {
        const response = await axios.get('https://random-data-api.com/api/beer/random_beer');
        console.log(response.data);
        this.beer = response.data;
      }catch(e){
        alert("Ошибка: подходящее пиво пиво не найдено")
      }
    },
    async fetchUser(){
      try {
        const response = await axios.get("https://random-data-api.com/api/users/random_user");
        console.log(response.data);
        this.user = response.data;
      }catch(e){
        alert("Ошибка: пользователь не найден")
      }
    },
  },
  mounted(){
    this.fetchBeer();
    this.fetchUser();
  }
}
</script>

<style>
.info div{
  margin: 10px;
}
</style>