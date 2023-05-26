<template>
  <div>
    <input type="text" v-on:input="alterarTitulo">
    <p>{{ titulo }}</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class PrimeiraAppV2 extends Vue {
  titulo: string = 'Usando VueJS2!';

  alterarTitulo(event: any): void {
    this.titulo = event.target.value;
  }
}
</script>