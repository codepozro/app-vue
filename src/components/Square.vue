<template>
  <button class="square" @click="handleClick(sqid)">
    {{ value }}
  </button>
</template>

<script>
export default {
  name: 'Square',
  props: ['sqid', 'takenBy'],
  computed: {
    value: function () {
      return (this.takenBy) ? this.takenBy : this.sqid
    }
  },
  methods: {
    handleClick: function (sqid) {
      this.$emit('click', sqid)
    }
  }
}
</script>

<style scoped>
</style>
