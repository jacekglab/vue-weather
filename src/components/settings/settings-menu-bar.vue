<template>
  <nav :class="$store.getters.theme" class="menu-bar">
      <router-link :to="{ name: 'Dashboard' }" class="router">
        <button class="back btn"></button>
      </router-link>
      <section class="description">
        {{ $store.getters.lang.settings.name }}
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
  border-bottom: solid 1px #BDBDBD;
  .back{
    border: none;
    background: url("./assets/back-arrow-light.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }
}
.dark{
  background: black;
  border-bottom: solid 1px #424242;
  color: #F5F5F5;
  .back{
    border: none;
    background: url("./assets/back-arrow-dark.svg");
    background-size: contain;
    background-repeat: no-repeat;
  }
}
</style>
