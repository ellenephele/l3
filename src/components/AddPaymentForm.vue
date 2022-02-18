<template>
  <div>
    <label for="value">
      <input id="value" type="text" placeholder="Amount" v-model="value">
    </label>
    <label for="category">
      <select id="category" v-model="category">
        <option
            v-for="category of categoryList"
            :value="category"
            :key="category"
        >
          {{ category }}
        </option>
      </select>
    </label>
    <label for="date">
      <input id="date" type="text" placeholder="Date" v-model="date">
    </label>
    <button @click="addPayment">Add</button>
  </div>
</template>

<script>
export default {
  name: 'AddPaymentForm',
  props: {
    categoryList: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    value: '',
    category: '',
    date: '',
  }),
  methods: {
    resetData() {
      this.value = '';
      this.category = '';
      this.date = '';
    },
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
        value: +value,
        category,
        date: date || paymentDay,
      };

      // console.log(data);
      this.$emit('add-payment', data);
      this.resetData();
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