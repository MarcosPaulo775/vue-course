<template>
  <div>
    <p>{{ titulo }}</p>
    <p>{{ saudacao() }}</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class TemplateV2 extends Vue {
  titulo: string = 'Usando VueJS2!';

  saudacao() {
    return 'Boa semana!';
  }
}
</script>