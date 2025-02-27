<template>
  <main>
    <Accordion :value="['0']" multiple>
      <AccordionPanel value="0">
        <AccordionHeader>Preview</AccordionHeader>
        <AccordionContent>
          <Prevue />
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="1">
        <AccordionHeader>Выбор Расы</AccordionHeader>
        <AccordionContent>
          <Race />
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="2">
        <AccordionHeader>Характеристики</AccordionHeader>
        <AccordionContent>
          <Parameters />
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="3">
        <AccordionHeader>Навыки</AccordionHeader>
        <AccordionContent>
          <Skills/>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </main>
</template>

<script setup lang="ts">
import Accordion from "primevue/accordion";
import AccordionPanel from "primevue/accordionpanel";
import AccordionHeader from "primevue/accordionheader";
import AccordionContent from "primevue/accordioncontent";
import Prevue from "./prevue.vue";
import Race from "./race.vue";
import Parameters from "./parameters.vue";
import Skills from "./skills.vue";
</script>

<style scoped>
main {
  width: 1024px;
  height: 100%;
  border: 1px solid black;
  margin: 0 auto;
}
</style>
