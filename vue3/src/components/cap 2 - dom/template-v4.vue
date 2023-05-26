<template>
  <div>
    <p>{{ titulo }}</p>
    <p>{{ saudacao() }}</p>
    <a v-bind:href="link">Google</a>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class TemplateV4 extends Vue {
  titulo: string = 'Usando VueJS2!';
  link: string = 'http://google.com.br';

  saudacao() {
    return this.titulo;
  }
}
</script>