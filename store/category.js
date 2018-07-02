/*
*
* 分类数据状态
*
*/

export const state = () => {
  return {
    fetching: false,
    data: { list: [] }
  }
}

export const mutations = {
  REQUEST_LIST(state) {
    state.fetching = true
  },
  GET_LIST_FAILURE(state) {
    state.fetching = false
    state.data = { list: [] }
  },
  GET_LIST_SUCCESS(state, action) {
    state.fetching = false
    state.data = action.result
  }
}
