<template src="./index.html"></template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Desafio01 extends Vue {
  nome: string = 'Marcos Paulo';
  idade: number = 24;
  img: string = 'https://avatars.githubusercontent.com/u/32870576?v=4';

  randomNumber(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
}
</script>