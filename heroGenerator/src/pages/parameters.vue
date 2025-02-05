<template>
  <section class="char-wrapper">

    <CustomInputNumber id=dexterity :customClass ="'char'" :label ="config.dexterity.label" :labelTitle="config.dexterity.labelTitle" :startValue="config.dexterity.startValue" :minVal="config.dexterity.minVal" :maxVal="config.dexterity.maxVal"/>

    <CustomInputNumber id="strength" :customClass ="'char'" :label ="'strength'" :labelTitle="'сила'" :startValue="4" :minVal="4" :maxVal="12"/>

    <CustomInputNumber id="brains" :customClass ="'char'" :label ="'brains'" :labelTitle="'смекалка'" :startValue="4" :minVal="4" :maxVal="12"/>

    <CustomInputNumber id="temper" :customClass ="'char'" :label ="'temper'" :labelTitle="'характер'" :startValue="4" :minVal="4" :maxVal="12"/>

    <CustomInputNumber id="stamina" :customClass ="'char'" :label ="'stamina'" :labelTitle="'выносливость'" :startValue="4" :minVal="4" :maxVal="12"/>
  </section>
</template>

<script setup lang="ts">
// import InputNumber from "primevue/inputnumber";
import CustomInputNumber from "../shared/ui/CustomInputNumber/CustomInputNumber.vue";

const config = {
  dexterity: {
    id:"dexterity",
    label:'dexterity',
    labelTitle:'ловкость',
    startValue: 8,
    minVal:4,
    maxVal:10
  }
}
</script>

<style scoped>

  .char-wrapper {
    display: flex;
    justify-content: space-between;
  }

</style>
