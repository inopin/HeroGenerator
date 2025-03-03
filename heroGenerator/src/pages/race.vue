<template>
  <div class="wrapper">
    <div class="buttons">
      <Button
        v-for="item in raceList"
        :key="item.id"
        class="button !border-2"
        variant="outlined"
        label="item.label"
        :id="item.id"
        @mouseenter="raceSelect($event)"
        @click="data.character.charRace.setRace(selected)"
      >
        <img :src="item.src" :alt="item.label" width="35" />
      </Button>
    </div>
    <Card class="card">
      <template #title>{{ selected.label }}</template>
      <template #content>
        <p class="m-0">
          {{ selected.description }}
        </p>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import Card from "primevue/card";
import {rootData} from '../stores/rootStore.ts'
import { ref } from "vue";

const data = rootData()

const raceList = data.character.charRace.raceList
const chosenRace = data.character.charRace.chosenRace

const selected = ref(chosenRace) || data.character.charRace.raceList[0];

function raceSelect(event: any) {
  selected.value = raceList.find((item) => item.id === event.target.id);
}


</script>

<style scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.buttons {
  max-width: 50%;
  display: flex;
  justify-content: space-between;
}

.button {
  width: 70px;
  height: 70px;
  margin: 6px;
  background-color: antiquewhite;
  border: 1px solid black;
}

.card {
  max-width: 50%;
}
</style>
