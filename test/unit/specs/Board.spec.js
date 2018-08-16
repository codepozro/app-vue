import Vue from 'vue'
import Board from '@/components/Board'

describe('Board.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Board)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.board .status').textContent)
      .toEqual('Next player: X')
  })
})
