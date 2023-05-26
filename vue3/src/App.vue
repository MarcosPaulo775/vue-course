<template>
  <Desafio01></Desafio01>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import Desafio01 from './components/desafios/desafio-01/desafio-01.vue';

@Options({
  components: {
    Desafio01
  }
})
export default class App extends Vue { }
</script>
