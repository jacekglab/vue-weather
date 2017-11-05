<template>
  <div  :class="$store.getters.theme" class="detail">
        <i :class="icon" class="wi icon"></i>
        <p class="value">{{ $store.getters.dashDetails[name][$store.getters.activeDay] }}</p>
        <p class="text"> {{ $store.getters.lang.details[name] }} </p>
    </div>
</template>

<script>
export default {
  name: "detail",
  props: {
        name: String,
        icon: String
    },
}
</script>

<style lang="scss" scoped>
@import "details-style.scss";
.detail{
  .light{
        background: #F5F5F5;
        color: #212121;
    }
  .dark{
        background: #000000;
        color: #EEE;
    }
}
</style>
