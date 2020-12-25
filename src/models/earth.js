export default {
  namespace: 'earth',
  state: {
    NSCEarth: null,
  },
  effects: {
    *updateNSCEarth({ payload }, { call, put }) {
      const NSCEarth = payload;
      yield put({
        type: 'save',
        payload: {
          NSCEarth,
        },
      });
    },
  },
  reducers: {
    save(state, action) {
      const newState = { ...state, ...action.payload };
      // console.log(newState);
      return newState;
    },
  },
};
