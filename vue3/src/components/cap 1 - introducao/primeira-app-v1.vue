<template>
  <div>
    <p>{{ titulo }}</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class PrimeiraAppV1 extends Vue {
  titulo: string = 'Usando VueJS2!';
}
</script>