<template>
  <div class="thumbnail">
    <main></main>
  </div>
</template>

<script>
  export default {
    name: 'thumbnail',
    components: {
  
    },
    data() {
      return {
  
      };
    }
  };
</script>

<style lang="scss">
  .thumbnail {
    width: 100%;
    background: #F5F5F5;
    main {
      height: 50vh;
      margin: 3em 0 0 0;
      padding: 2em;
      background: url("https://images.unsplash.com/photo-1476522183715-d1a7af59419f?auto=format&fit=crop&w=1502&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D");
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
    .light{
        background: #F5F5F5;
        color: #212121;
    }
    .dark{
        background: #000000;
        color: #EEE;
    }
</style>
