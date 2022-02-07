<template>
  <div class="user">
    <div class="username">
      <h1>{{user.username}}</h1>
    </div>
    <div class="img user_avatar">
      <img :src="user.avatar" alt="avatar">
    </div>
    <div class="info user_info">
      <div><strong>Имя: </strong>{{user.first_name}}</div>
      <div><strong>Фамилия: </strong>{{user.last_name}}</div>
      <div><strong>Дата рождения: </strong>{{user.date_of_birth}}</div>
      <div><strong>E-mail: </strong>{{user.email}}</div>
      <div><strong>Пол: </strong>{{user.gender}}</div>
      <div><strong>Номер телефона: </strong>{{user.phone_number}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  data(){
    return{

    }
  },
  props:{
    user:{
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.user{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  justify-items: left;
  align-items: center;
}

.user .username{
  grid-column: 1/4;
}

.user_avatar img{
  width: 100%;
}

@media(max-width: 564px){
  .user{
    grid-template-columns: 1fr;
    justify-items: left;
    align-items: center;
  }

  .user .username{
    grid-column: 1/2;
  }
}
</style>