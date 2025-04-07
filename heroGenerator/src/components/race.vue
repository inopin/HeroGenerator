<template>
    <div class="wrapper">
        <div v-if="error">{{ error }}</div>
        <div v-if="isLoading">Loading...</div>

        <div class="buttons">
            <Button
                v-for="item in charRace"
                :key="item.id"
                class="button !border-2"
                variant="outlined"
                :label="item.label"
                :id="item.id"
                @mouseenter="raceSelect($event)"
                @click="setRace(selected)"
            >
                <img
                    :src="item.iconSrc"
                    :alt="item.label"
                    width="35"
                />
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
    import Button from 'primevue/button'
    import Card from 'primevue/card'
    import { useRootData } from '@/stores/rootStore'
    import { ref } from 'vue'
    import { storeToRefs } from 'pinia'

    const data = useRootData()
    const { charRace, error, isLoading } = storeToRefs(data)
    const { setRace, chosenRace } = data

    chosenRace.value = ref(charRace.value)

    const selected = ref(chosenRace) || charRace.value[0]

    function raceSelect(event: any) {
        selected.value = charRace.value.find((item: { id: number }) => item.id === event.target.id)
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
