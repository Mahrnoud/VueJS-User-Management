<template>
  <nav class="col-12 col-md-3 text-bg-primary collapse d-md-block" id="sidebarMenu">
    <div class="d-flex justify-content-center align-items-start h-100 py-3">
      <div class="col-10">
        <div class="d-flex align-items-center mb-4 mt-4">
          <img class="img-fluid rounded me-2" loading="lazy" src="@/assets/images/logo.png" width="40" alt="Digital Wallet Logo">
          <h2 class="h5 text-white mb-0">Digital Wallet</h2>
        </div>
        <hr class="border-secondary-subtle">
        <nav class="nav flex-column">
          <a href="#" class="menu-item text-white mb-2" aria-label="Home">
            <i class="bi bi-house me-2"></i> Home
          </a>
          <a href="#" class="menu-item text-white mb-2" aria-label="Transactions">
            <i class="bi bi-list-check me-2"></i> Transactions
          </a>
          <a href="#" class="menu-item text-white mb-2" aria-label="Reports">
            <i class="bi bi-clipboard-data me-2"></i> Reports
          </a>
          <a href="#" class="menu-item text-white mb-2" aria-label="Notifications">
            <i class="bi bi-bell me-2"></i> Notifications
          </a>
          <a href="#" class="menu-item text-white mb-2" aria-label="Settings">
            <i class="bi bi-gear me-2"></i> Settings
          </a>
          <a href="/logout" class="menu-item text-white mb-2" aria-label="Logout">
            <i class="bi bi-box-arrow-left me-2"></i> Logout
          </a>
        </nav>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>
