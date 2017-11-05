<template>
    <section :class="$store.getters.theme" class="current">
        <p class="description">{{ $store.getters.currentWeather.condition.text }}</p>
        <div :class="mapIcon($store.getters.currentWeather.condition.icon)" class="icon"></div>
        <div class="temp">
            <p class="avg">{{ $store.getters.currentTemp.avg }}</p>
            <div class="minor">
                <p class="max">
                    <i class="fa fa-caret-up" aria-hidden="true"></i> 
                    {{ $store.getters.currentTemp.max }}
                </p>
                <p class="min">
                    <i class="fa fa-caret-down" aria-hidden="true"></i> 
                    {{ $store.getters.currentTemp.min }}
                </p>
            </div>
        </div>
    </section>
</template>

<script>
    
    import { iconMap as apixuMappings } from './iconMap';
    
    export default {
        name: "current",
        methods: {
            mapIcon(url) {
                const re = /(?!\/)(\d{3})(?!\w{3})/;
                return apixuMappings[re.exec(url)[0]];
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .current {
        margin-top: 3em;
        height: auto;
        text-align: center;
        display: grid;
        grid-template-rows: auto;
        border: none;
        .description {
            text-transform: uppercase;
            letter-spacing: 0.5em;
            font-size: 1.5em;
        }
        .icon {
            font-size: 8em;
            margin: 10% 0 20% 0;
        }
        .temp {
            display: flex;
            flex-direction: row;
            justify-content: center;
            letter-spacing: 0.1em;
            margin: 2em 0 2em 0;
            .avg {
                font-size: 4em;
                margin: 0;
                font-weight: lighter;
            }
            .minor {
                display: flex;
                flex-direction: column;
                margin: 0 0 0 0.5em;
                .min, .max{
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-start;
                        .fa{
                            margin: 0 0.3em 0 0;
                        }
                    }
                p {
                    margin: 0.5em 0 0.5em 0;
                    .fa-caret-up {
                        color: #FF5722
                    }
                    .fa-caret-down {
                        color: #3F51B5
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
