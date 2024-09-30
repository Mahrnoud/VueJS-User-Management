<template>
  <div class="col-12 col-md-4 mb-4">
    <div class="balance-widget bg-light p-3 rounded shadow-sm">
      <p class="text-muted">Current Balance</p>
      <h4>{{ balance }}</h4>
    </div>
    <div class="mt-3 d-grid gap-2 d-md-block">
      <button type="button" class="btn btn-primary">Add Balance</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['balance'],
};
</script>
