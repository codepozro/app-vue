<template>
  <div class="game">
    <div class="game-board">
      <Board />
    </div>
    <div class="game-info">
      <div><!--status--></div>
      <ol><!--TODO--></ol>
    </div>
  </div>
</template>

<script>
import Board from './Board.vue'

export default {
  name: 'Game',
  components: {
    Board
  }
}
</script>

<style scoped>
  body {
    font: 14px "Century Gothic", Futura, sans-serif;
    margin: 20px;
  }
</style>
