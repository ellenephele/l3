<template>
  <div>
    <label for="date">
      <input id="date" type="text" placeholder="Date" v-model="date">
    </label>
    <label for="category">
      <input id="category" type="text" placeholder="Type" v-model="category">
    </label>
    <label for="value">
      <input id="value" type="text" placeholder="Amount" v-model="value">
    </label>
    <button @click="addPayment">Add</button>
  </div>
</template>

<script>
export default {
  name: 'AddPaymentForm',
  data: () => ({
    date: '',
    category: '',
    value: '',
  }),
  methods: {
    addPayment() {
      // const data = {
      //   value: this.value,
      //   category: this.category,
      //   date: this.date || this.paymentDay,
      // };
      const {
        value, category, date, paymentDay,
      } = this;
      const data = {
        date: date || paymentDay,
        category,
        value,
      };

      // console.log(data);
      this.$emit('add-payment', data);
    },
  },
  computed: {
    paymentDay() {
      const currentDate = new Date();
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();

      return `${day}.${month}.${year}`;
    },
  },
};
</script>

<style module>

</style>
