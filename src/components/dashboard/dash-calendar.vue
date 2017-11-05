<template>
    <div :class="$store.getters.theme" class="calendar">
        <main>
            <div class="wrapper">
                <div class="day" v-on:click="changeDay(index)" v-for="(item, index) in this.$store.getters.forecast.forecastday">
                    <div v-if="$store.getters.activeDay !== index" class="not-active">
                        <div class="offset"></div>
                        <div :class="mapIcon(item.day.condition.icon)" class="icon"></div>
                        <p> {{ mapDate(item.date, index) }} </p>
                        <div class="offset"></div>
                    </div>
                    <div v-else class="active">
                        <div class="offset"></div>
                        <div :class="mapIcon(item.day.condition.icon)" class="icon"></div>
                        <p> {{ mapDate(item.date, index) }} </p>
                        <div class="offset"></div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import {iconMap as apixuMappings} from './iconMap';

    export default {
        name: 'calendar',
        components: {
    
        },
        data() {
            return {
    
            };
        },
        methods:{
            mapIcon(url){
                const re = /(?!\/)(\d{3})(?!\w{3})/;
                return apixuMappings[re.exec(url)[0]];
            },
            mapDate(date, index){
                if(index === 0) 
                    return this.$store.getters.lang.calendar.today;
                else
                    return this.$store.getters.lang.calendar[new Date(date).getDay()].slice(0, 3);
            },
            changeDay(index){
                this.$store.dispatch('SET_ACTIVE_DAY', index)
            }
        }
    };
</script>

<style lang="scss">
    .calendar {
        border: none;
        main {
            .wrapper {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                overflow: auto;
                white-space: nowrap;
                .day {
                    margin: 0;
                    flex-shrink: 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    cursor: pointer;
                    .icon {
                        font-size: 2em;
                        padding: 0 0 0.25em 0;
                        margin: auto auto;
                    }
                    p {
                        font-size: 1.2em;
                        padding: 0.25em 0 0 0;
                        margin: auto auto;
                    }
                    .active {
                        display: grid;
                        grid-template-rows: 1fr 1fr 1fr 1fr;
                        background: #3F51B5;
                        color: #F5F5F5;
                        width: 26vw;
                        height: 26vw;
                    }
                    .not-active{
                        display: grid;
                        grid-template-rows: 1fr 1fr 1fr 1fr;
                        background: none;
                        width: 26vw;
                        height: 26vw;
                    }
                } 
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
    }
</style>
