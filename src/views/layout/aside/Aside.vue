<template>
  <div class="nav-left-sidebar sidebar-dark">
    <div class="menu-list">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="d-xl-none d-lg-none text-white" href="#">Dashboard</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div id="navbarNav" class="collapse navbar-collapse">
          <ul class="navbar-nav flex-column">
            <li class="nav-divider">
              Menu
            </li>
            <li class="nav-item">
              <router-link to="dashboard" class="nav-link"
                ><i class="fa fa-fw fa-user-circle" /> Dashboard
              </router-link>
            </li>
            <li class="nav-item ">
              <a
                class="nav-link active"
                href="#"
                data-toggle="collapse"
                aria-expanded="false"
                data-target="#submenu-1"
                aria-controls="submenu-1"
              >
                <i class="fa fa-fw fa-user-circle" /> Pages
                <span class="badge badge-success">6</span>
              </a>
              <div id="submenu-1" class="collapse submenu" style="">
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <router-link to="page1" class="nav-link">
                      Page 1</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link to="page2" class="nav-link">
                      Page 2
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Aside',
};
</script>

<style></style>
