<template>
  <div class="loading">
    <div class="logo"></div>
    <h1>WEATHER</h1>
  </div>
</template>

<script>

export default {
  name: 'loading',
  data(){
    return{

    };
  }
};
</script>

<style lang="scss">
    .loading{
        height: 100%;
        color: #212121;
        background: #F5F5F5;
        display: flex;
        text-align: center;
        flex-direction: column;
        justify-content: center;
        .logo{
          width: 100px;
          height: 100px;
          background: url("./assets/Vue.js_Logo.svg");
          background-size: cover;
          background-repeat: no-repeat;
          margin: 0 auto;
        }
        h1{
          font-weight: 300;
          letter-spacing: 0.2em;
          margin: 0;
          padding: 0;
        }
    }
</style>
