<template>
  <section class="char-wrapper">

    <CustomInputNumber
    v-for="item in paramsList"
    :id="item.id"
    :customClass ="'char'"
    :label ="item.label"
    :labelTitle="item.labelTitle"
    :startValue="item.startValue"
    :minVal="item.minVal"
    :maxVal="item.maxVal"/>


  </section>
</template>

<script setup lang="ts">

import { ref, watch } from "vue";
import CustomInputNumber from "../shared/ui/CustomInputNumber/CustomInputNumber.vue";
import {rootData} from '../stores/rootStore.ts'
import { storeToRefs } from 'pinia';

const data = rootData()
const { charParams } = storeToRefs(data.character);
const paramsList = ref(charParams.value.paramsList);

watch(
  () => data.character.charParams.paramsList,
  (newValue) => {
    paramsList.value = charParams.value.paramsList
  }
);
</script>

<style scoped>

  .char-wrapper {
    display: flex;
    justify-content: space-between;
  }

</style>
