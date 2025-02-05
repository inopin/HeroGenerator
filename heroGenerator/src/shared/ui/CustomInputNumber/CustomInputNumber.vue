<template>
    <div class="input__item" :class = customClass>
        <label for={{label}}>{{ labelTitle }}</label>
        <button class='up' @click="increment" :disabled="isMax"></button>
        <input type="text" name={{label}} vax v-model="count"/>
        <button class='down' @click="decrement" :disabled="isMin">-</button>
    </div>
</template>

<script setup lang="ts">
    import { computed, ref, watch } from 'vue';
    import './style.scss'

    interface Props {
        label:string,
        labelTitle:string,
        startValue:number,
        minVal:number,
        maxVal: number,
        customClass:string
    }

    const props = defineProps<Props>()
    const count = ref(props.startValue)
    const step = ref(2)
    const min = ref(props.minVal)
    const max = ref(props.maxVal)

    const isMin = computed(()=> count.value <= min.value)
    const isMax = computed(()=> count.value >=max.value)

    const increment = () => {
        if(count.value < max.value) {
            count.value += step.value
        }
        if(count.value < 4) {
            count.value = 4
        }

    }

    const decrement = () => {
        if(count.value > min.value) {
            count.value -= step.value
        }
        if(count.value < 4) {
            count.value = 0
        }

    }

    watch(count, (newValue)=>{
        console.log('новое значение:',newValue)
    })



</script>

