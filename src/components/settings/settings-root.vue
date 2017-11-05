<template>
  <div :class="$store.getters.theme" class="settings">
        <menuBar></menuBar>
        <div class="wrapper">
            <theme></theme>
            <units></units>
            <language></language>
        </div>
        <footer>
            <p>© 2017 Jacek Głąb. All rights reserved.</p>
        </footer>
    </div>
</template>

<script>
import menuBar from './settings-menu-bar';
import theme from './settings-theme';
import units from './settings-units';
import language from './settings-language';
export default {
  name: "settings",
  components:{
      menuBar,
      theme,
      units,
      language
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.settings{
    height: calc(100% - 1px);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    footer{
        text-align: center;
    }
    .wrapper{
        margin: calc(32px + 1em) 0 0 0;
    }
}
.light{
    background: #F5F5F5;
    color: #212121;
    footer{
        background: #F5F5F5;
        color: #212121;
    }
}
.dark{
    background: #000000;
    color: #EEE;
    footer{
        background: #000000;
        color: #EEE;
    }
}
/*.content{
    form{
        display: flex;
        flex-direction: column;
    }
    form > div {
            margin: 1em auto 1em 2em;
    }
}*/
</style>
