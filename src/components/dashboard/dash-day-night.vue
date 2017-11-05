<template>
    <div :class="$store.getters.theme" class="day-night">
        <main>
            <div class="visualisation">
                <div class="day">
                    <div class="current"></div>
                </div>
            </div>
            <div class="description">
                <div class="desc, start">
                    <p class="key">Sunrise</p>
                    <p class="value"><strong>04:51</strong></p>
                </div>
                <div class="desc, end">
                    <p class="key">Sunset</p>
                    <p class="value"><strong>19:21</strong></p>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: 'day-night',
        components: {
    
        },
        data() {
            return {
    
            };
        }
    };
</script>

<style lang="scss">
    .day-night {
        width: 100%;
        height: auto;
        main {
            margin: 1em 1em 1em 1em;
            .visualisation {
                width: 100%;
                height: 14px;
                border-radius: 7px;
                background: #3F51B5;
                .day {
                    width: 55%;
                    height: 100%;
                    border-radius: 7px;
                    background: #F5F5F5;
                    margin-left: 20%;
                    .current {
                        width: 14px;
                        height: 14px;
                        border-radius: 7px;
                        background: #FFC107;
                        margin-left: 50%;
                    }
                }
            }
            .description {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                .value{
                    font-size: 1em;
                }
                .key{
                    font-size: 0.8em;
                }
                .desc {
                    p {
                        margin: 5px 0 5px 0;
                        padding: 0;
                    }
                    
                }
                .start{
                    text-align: left;
                }
                .end{
                    text-align: right;
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
