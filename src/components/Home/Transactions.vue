<template>
  <div class="col-12 col-md-8">
    <div class="transactions">
      <h3>Transactions</h3>
      <p>Last 5 transactions</p>
      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Transaction ID</th>
            <th scope="col">Type</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(transaction, index) in transactions" :key="transaction.id">
            <td><i class="bi" :class="transaction.type === 'Deposit' ? 'bi-graph-down-arrow' : 'bi-graph-up-arrow'"></i></td>
            <td>{{ transaction.id }}</td>
            <td>{{ transaction.type }}</td>
            <td>{{ transaction.amount }}</td>
            <td>{{ transaction.date }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['transactions'],
};
</script>
