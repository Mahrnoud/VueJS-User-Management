<template>
  <div>
    <Navbar />
    <section class="p-3 p-md-4 p-xl-5">
      <div class="container-fluid">
        <div class="card border-light-subtle shadow-sm">
          <div class="row g-0">
            <Sidebar />
            <div class="col-12 col-md-9">
              <div class="card-body p-3 p-md-4 p-xl-5">
                <div class="mb-5">
                  <h3>Welcome, {{ user.first_name }}</h3>
                  <p class="text-secondary">{{ user.email }}</p>
                </div>
                <div class="row">
                  <BalanceWidget :balance="balance" />
                  <Transactions :transactions="transactions" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '@/components/Home/Navbar.vue';
import Sidebar from '@/components/Home/Sidebar.vue';
import BalanceWidget from '@/components/Home/BalanceWidget.vue';
import Transactions from '@/components/Home/Transactions.vue';

export default {
  components: {
    Navbar,
    Sidebar,
    BalanceWidget,
    Transactions,
  },
  data() {
    return {
      user: this.$store.getters['user/userData'],
      balance: 1000000,
      transactions: [
        { id: 1, type: 'Deposit', amount: 300000, date: '24/09/2024' },
        { id: 2, type: 'Withdrawal', amount: 10000, date: '24/09/2024' },
        { id: 3, type: 'Withdrawal', amount: 3000, date: '24/09/2024' },
        { id: 4, type: 'Deposit', amount: 10000, date: '24/09/2024' },
        { id: 5, type: 'Withdrawal', amount: 10000, date: '24/09/2024' },
      ],
    };
  },
};
</script>
