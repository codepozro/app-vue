<template>
  <div class="board">
    <div class="status">{{ status }}</div>
    <div class="board-row">
      <Square v-for="i in [0,1,2]" :key="i" :sqid="i" :takenBy="squares[i]" @click="handleClick(i)"/>
    </div>
    <div class="board-row">
      <Square v-for="i in [3,4,5]" :key="i" :sqid="i" :takenBy="squares[i]" @click="handleClick(i)"/>
    </div>
    <div class="board-row">
      <Square v-for="i in [6,7,8]" :key="i" :sqid="i" :takenBy="squares[i]" @click="handleClick(i)"/>
    </div>
  </div>
</template>

<script>
import Square from './Square.vue'
import calculateWinner from '../winnerCalculator.js'

export default {
  name: 'Board',
  components: {
    Square
  },
  data () {
    return {
      squares: Array(9).fill(null), /* TODO: make squares objects */
      isXNext: true
    }
  },
  computed: {
    status: function () {
      return boardStatus(this.isXNext, this.squares)
    }
  },
  methods: {
    handleClick: function handleClick (i) {
      // if there is a winner or the square has already been taken
      if (calculateWinner(this.squares) || this.squares[i]) {
        return
      }

      // mutate state
      const hasXPlayed = this.isXNext
      this.squares[i] = nextPlayer(hasXPlayed)
      this.isXNext = !hasXPlayed
    }
  }
}

function boardStatus (isXNext, squares) {
  const maybeWinner = calculateWinner(squares)
  return maybeWinner ? 'Winner: ' + maybeWinner : 'Next player: ' + nextPlayer(isXNext)
}

function nextPlayer (isXNext) {
  return isXNext ? 'X' : 'O'
}

</script>

<style scoped>
  .board-row:after {
    clear: both;
    content: "";
    display: table;
  }
</style>
