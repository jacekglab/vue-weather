<template>
  <div id="app">
    <loading v-if="this.$store.getters.status === 'INIT'"></loading>
    <router-view v-if="this.$store.getters.status === 'EXECUTION'"></router-view>
  </div>
</template>

<script>
import loading from './components/loading/loading';
import dashboard from './components/dashboard/dash-root';
import settings from './components/settings/settings-root'

export default {
  name: 'app',
  components: {
    loading,
    dashboard,
    settings
  },
  data(){
    return{

    };
  },
  computed: {
  },
  methods: {
    init(){
      this.$store.dispatch('FETCH_COORDS')
        .then(() => this.$store.dispatch('FETCH_WEATHER', `${this.$store.getters.latitude},${this.$store.getters.longitude}`))
        .then(() => {
            if(window.localStorage.getItem("theme") === null){
              this.$store.dispatch('SET_THEME', "light")
            }
            else {
              this.$store.dispatch('SET_THEME', window.localStorage.getItem("theme"));
            }
            if(window.localStorage.getItem("units") === null){
              this.$store.dispatch('SET_UNITS', "metric")
            }
            else {
              this.$store.dispatch('SET_UNITS', window.localStorage.getItem("units"));
            }
            if(window.localStorage.getItem("language") === null){
              this.$store.dispatch('SET_LANGUAGE', "eng")
            }
            else {
              this.$store.dispatch('SET_LANGUAGE', window.localStorage.getItem("language"));
            }
        })
        .then(() => this.$store.dispatch('SET_STATUS', "EXECUTION"));
    }
  },
  mounted(){
    this.init();
  }
};
</script>

<style lang="scss">
body, html{
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  font-family: 'Roboto';
}
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
</style>
