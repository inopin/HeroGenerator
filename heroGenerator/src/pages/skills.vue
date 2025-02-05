<template>
    <section class="skill-wrapper">
        <h4>ловкость</h4>
        <CustomInputNumber id="#":customClass ="'char'" :label ="config.fight.label" :labelTitle="config.fight.labelTitle" :startValue="config.fight.startValue" :minVal="config.fight.minVal" :maxVal="config.fight.maxVal"/>
    </section>
</template>

<script setup lang="ts">
import CustomInputNumber from "../shared/ui/CustomInputNumber/CustomInputNumber.vue";

const config = {
    fight: {
        id:"fight",
        label:'fight',
        labelTitle:'драка',
        startValue: 0,
        minVal:0,
        maxVal:12
    }
}
</script>

<style>


</style>