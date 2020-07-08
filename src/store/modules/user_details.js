
const state = {
  userDetails: {
    firstname: "John",
    lastname: "Doe",
    backgroundColor: "#0099cc",
  }
};
const getters = {
  userDetails(state) {
    return state.userDetails;
  }
};
const mutations = {
  updateUserDetails(state, updatedInfo) {
    state.userDetails[updatedInfo.attribute] = updatedInfo.value;
  },
};

export default {
  state,
  getters,
  mutations
};