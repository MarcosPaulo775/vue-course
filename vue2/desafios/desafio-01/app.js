new Vue({
  el: '#desafio',
  data: {
    nome: 'Marcos Paulo',
    idade: 24,
    img: 'https://avatars.githubusercontent.com/u/32870576?v=4',
    
  },
  methods: {
    randomNumber: function(min, max) {
      return Math.random() * (max - min) + min;
    }
  }
})