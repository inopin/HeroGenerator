<template>
  <section class="char-wrapper">

    <CustomInputNumber
    v-for="item in currentConfig"
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

import { computed } from "vue";
import CustomInputNumber from "../shared/ui/CustomInputNumber/CustomInputNumber.vue";
import {rootData} from '../stores/rootStore.ts'

const data = rootData()

const currentConfig = computed(()=> data.character.charParams.paramsList)

</script>

<style scoped>

  .char-wrapper {
    display: flex;
    justify-content: space-between;
  }

</style>
