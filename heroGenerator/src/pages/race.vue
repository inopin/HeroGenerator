<template>
  <div class="wrapper">
    <div class="buttons">
      <Button
        v-for="item in data"
        :key="item.id"
        class="button !border-2"
        variant="outlined"
        label="item.label"
        :id="item.id"
        @mouseenter="raceSelect($event)"
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
import { ref } from "vue";
const data = [
  {
    label: "Человек",
    id: "human",
    description: "Lorem ipsum Человек",
    src: "src/assets/imgs/human.png",
  },
  {
    label: "Эльф",
    id: "elf",
    description: "Lorem ipsum Эльф",
    src: "src/assets/imgs/elf.png",
  },
  {
    label: "Орк",
    id: "orc",
    description: "Lorem ipsum Орк",
    src: "src/assets/imgs/orc.png",
  },
];
const selected = ref(data[0]);

function raceSelect(event: any) {
  selected.value = data.find((item) => item.id === event.target.id);
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
