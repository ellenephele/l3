import Vue from 'vue';
import Vuex from 'vuex';
import category from '@/store/category';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paymentsList: [],
  },
  mutations: {
    SET_PAYMENTS_LIST(state, paymentsList) {
      state.paymentsList = paymentsList;
    },
    ADD_PAYMENT_DATA(state, payment) {
      state.paymentsList.push(payment);
    },
  },
  getters: {
    paymentsList: (state) => state.paymentsList,
    paymentsListTotalAmount: ({ paymentsList }) => paymentsList
      .reduce((total, { value }) => total + value, 0),
  },
  actions: {
    fetchData({ commit }) {
      setTimeout(() => {
        const paymentsList = [
          {
            date: '28.03.2020',
            category: 'Food',
            value: 169,
          },
          {
            date: '24.03.2020',
            category: 'Transport',
            value: 360,
          },
          {
            date: '24.03.2020',
            category: 'Food',
            value: 532,
          },
        ];

        commit('SET_PAYMENTS_LIST', paymentsList);
      }, 1000);
    },
  },
  modules: {
    category,
  },
});
