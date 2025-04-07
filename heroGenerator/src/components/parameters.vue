<template>
  <section class="char-wrapper">
    <div v-if="error">{{ error }}</div>
    <div v-if="isLoading">Loading...</div>
    <CustomInputNumber
    v-for="item in currentConfig"
    :id="item.id"
    :customClass ="'char'"
    :label ="item.label"
    :labelTitle="item.labelTitle"
    :startValue="item.startVal"
    :minVal="item.minVal"
    :maxVal="item.maxVal"/>

  </section>
</template>

<script setup lang="ts">

import { computed } from "vue";
import CustomInputNumber from "@/shared/ui/CustomInputNumber/CustomInputNumber.vue";
import {useRootData} from '@/stores/rootStore'
import { storeToRefs } from "pinia";

const data = useRootData()
const {charParams,  error, isLoading, chosenRace } = storeToRefs(data)



const currentConfig = computed(()=> charParams.value)






</script>

<style scoped>

  .char-wrapper {
    display: flex;
    justify-content: space-between;
  }

</style>
