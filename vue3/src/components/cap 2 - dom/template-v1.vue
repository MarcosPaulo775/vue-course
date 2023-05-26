<template>
  <div>
    <p>{{ titulo }}</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class TemplateV1 extends Vue {
  titulo: string = 'Usando VueJS2!';
}
</script>