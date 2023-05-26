<template>
  <div>
    <p v-once>{{ titulo }}</p>
    <p>{{ saudacao() }}</p>
    <a v-bind:href="link">Google</a>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class TemplateV5 extends Vue {
  titulo: string = 'Usando VueJS2!';
  link: string = 'http://google.com.br';

  saudacao() {
    this.titulo = 'Bom dia!!!';
    return this.titulo;
  }
}
</script>