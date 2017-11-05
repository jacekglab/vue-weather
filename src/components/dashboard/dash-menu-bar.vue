<template>
  <nav :class="$store.getters.theme" class="menu-bar">
      <router-link :to="{ name: 'Settings' }" class="router">
        <button class="hamburger btn"></button>
      </router-link>
      <section class="description">
        {{ $store.getters.location.name }}, {{ $store.getters.location.country }}
      </section>
  </nav>
</template>

<script>
  export default {
    name: 'menu-bar',
    components: {
  
    },
    data() {
      return {
  
      };
    }
  };
</script>

<style lang="scss">

@import "../styles/navbar.scss";

.light{
  background: #F5F5F5;
  color: #212121;
  border-bottom: solid 1px #BDBDBD;
  .hamburger{
    background: url("./assets/hamburger-light.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }
}
.dark{
  background: #000000;
  color: #EEE;
  border-bottom: solid 1px #424242;
  .hamburger{
    background: url("./assets/hamburger-dark.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }
}
</style>
