<template>
  <div :class="$store.getters.theme" class="dashboard">
    <menu-bar></menu-bar>
    <current></current>
    <calendar></calendar>
    <dash-details></dash-details>
    <day-night></day-night>
  </div>
</template>

<script>
  import menuBar from './dash-menu-bar';
  import current from './dash-current';
  import dayNight from './dash-day-night';
  import dashDetails from './dash-details';
  import calendar from './dash-calendar';
  
  export default {
    name: 'dashboard',
    components: {
      menuBar,
      current,
      dayNight,
      dashDetails,
      calendar
    },
    data() {
      return {
  
      };
    }
  };
</script>

<style lang="scss">
  .dashboard {
    width: 100%;
    display: flex;
    flex-direction: column;
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
