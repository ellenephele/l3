<template>
<div>
<!--  <div v-if="show">Prop is true</div>-->
<!--  {{ items }} {{ $attrs }}-->
  <table>
  <tr>
    <th>&nbsp;</th><th>Date</th><th>Category</th><th>Value</th>
  </tr>
  </table>
  <div v-for="(item, index) in items" :key="index">
  <table>
  <tr>
    <td>{{ index + 1 }}</td>
    <td>{{ item.date }}</td>
    <td>{{ item.category }}</td>
    <td>{{ item.value }}</td>
  </tr>
</table>
  </div>
</div>
</template>

<script>
export default {
  name: 'PaymentDisplay',
  props: {
    items: {
      type: Array,
      default: () => ([]),
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style module>
table {
  border: 1px solid gray;
}
td, th {
  width: 100px;
  text-align: left;
}
</style>
