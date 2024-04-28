const mutations = {
   SET_SUPPORTS (state, supports) {
       // state.supports = supports
       state.supports = Object.assign({}, state.supports, supports)
   },

   SET_RESET_SUPPORTS (state) {
    state.supports = {data: [], meta: { total: 0, page: 0, last_page: 0 }}
   },

   ADD_NEW_SUPPORTS (state, support) {
    state.supports.data.unshift(support)
   },

   ADD_NEW_REPLY_TO_SUPPORT (state, data) {
      const supports = state.supports.data
      const reply = data.reply
      const supportId = data.supportId

      supports.forEach((support, i) => {
         if (support.id === supportId) {
            supports[i].replies.push(reply)
         }
      })

      state.supports.data = supports
   }
}

export default mutations