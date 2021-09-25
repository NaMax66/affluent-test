export default {
  namespaced: true,
  state () {
    return {
      count: 0
    };
  },
  mutations: {
    increment (state: any) {
      // @ts-ignore
      state.count++;
    }
  }
}
