<template>
  <div :class="$store.getters.theme" class="units setting">
            <button v-on:click="toggleSetting()" class="setting-btn">
                <p>{{ $store.getters.lang.settings.units.name }}</p>
                <div class="values">
                    <div class="arrow-down" 
                    v-bind:class="{ invetred: toggle }">
                    </div>
                </div>
            </button>
            <div v-if="this.toggle === true" class="content">
                <form>
                    <div>
                        <input type="radio" value="metric" v-model="$store.getters.units" v-on:change="changeUnits('metric')">
                        <label>{{ $store.getters.lang.settings.units.metric }}</label>
                    </div>
                    <div>
                        <input type="radio" value="imperial" v-model="$store.getters.units" v-on:change="changeUnits('imperial')">
                        <label>{{ $store.getters.lang.settings.units.imperial }}</label>
                    </div>
                </form>
            </div>
    </div>
</template>

<script>

export default {
  name: "units",
  data(){
      return{
          toggle: false,
      }
  },
  methods:{
      toggleSetting(){
          return this.toggle = !this.toggle;
      },
      changeUnits(units){
          this.$store.dispatch('SET_UNITS', units);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.setting{
   button:focus {outline:0;}
    .content{
        form{
            display: flex;
            flex-direction: column;
        }
        form > div {
                margin: 1em auto 1em 2em;
        }
    }
    .setting-btn{
        text-align: left;
        width: 100%;
        padding: 1em 1em 1em 1em;
        margin: 0;
        font-size: 1em;
        border: none;
        background: none;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .invetred{
            transform: rotate(180deg);
        }
        .arrow-down{
            background: url("./assets/arrow-down-light.svg");
            background-size: contain;
            background-repeat: no-repeat;
            width: 1em;
            height: 1em;
            }
            .values{
                display: flex;
                .value{
                    margin: 0 1em 0 0;
                }
            }
            p{
                margin: 0;
                padding: 0;
            }
        }
}
.light{
    background: #F5F5F5;
    color: #212121;
}
.dark{
    background: #000000;
    color: #EEE;
    border-bottom: solid 1px #000000;
    .setting-btn{
        background: #212121;
        color: #EEE;
        .arrow-down{
            background: url("./assets/arrow-down-dark.svg");
            background-size: contain;
            background-repeat: no-repeat;
        }
    }
}
</style>
