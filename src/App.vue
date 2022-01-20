<template>
  <div id="app">
<!--    <MyCounter v-if="show"/>-->
<!--    <button @click="show = !show">hide / show</button>-->
    <header>
      <div class="header">My personal costs</div>
    </header>

    <main>
<!--      <PaymentDisplay :items="paymentsList" :show="true"/>-->
      <PaymentDisplay :items="paymentsList"/>
      <AddPaymentForm @add-payment="addPayment"/>
    </main>
  </div>
</template>

<script>
// import MyCounter from '@/components/Counter.vue';

import PaymentDisplay from '@/components/PaymentDisplay.vue';
import AddPaymentForm from '@/components/AddPaymentForm.vue';

export default {
  name: 'App',
  components: {
    AddPaymentForm,
    PaymentDisplay,
    // MyCounter,
  },
  data: () => ({
    show: true,
    counter: 0,
    paymentsList: [],
  }),
  methods: {
    // increase(step, event) {
    //   // eslint-disable-next-line no-plusplus
    //   this.counter += step;
    //   console.log(event);
    // },
    fetchData() {
      return [
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
    },
    addPayment(data) {
      // console.log(data);
      this.paymentsList.push(data);
    },
  },
  created() {
    this.paymentsList = this.fetchData();
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
