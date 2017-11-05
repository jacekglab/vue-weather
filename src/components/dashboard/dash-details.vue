<template>
    <div :class="$store.getters.theme" class="details">
        <div class="row" v-for="(item, index) in childComponents">
            <detail :name="item.name" :icon="item.icon"></detail>
        </div>
    </div>
</template>

<script>
    import detail from './details/detail';

    export default {
        name: 'details',
        components: {
            detail
        },
        data() {
            return {
                index: this.$store.getters.activeDay,
                childComponents: [
                    {
                        name: "temperature",
                        icon: "wi-thermometer",
                    },
                    {
                        name: "humidity",
                        icon: "wi-humidity",
                    },
                    {
                        name: "uv",
                        icon: "wi-day-sunny",
                    },
                    {
                        name: "wind",
                        icon: "wi-strong-wind",
                    },
                    {
                        name: "precipation",
                        icon: "wi-umbrella",
                    },
                    {
                        name: "pressure",
                        icon: "wi-barometer",
                    }]
            };
        },
    };
</script>

<style lang="scss">
    .details {
        height: auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        padding: 1em;
        border: none;
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
