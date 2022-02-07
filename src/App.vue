<template>
  <div class="app">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  components: {Navbar}
}
</script>

<style>
.app{
  display: grid;
  grid-template-rows: repeat(3,minmax(min-content,max-content));
}
</style>