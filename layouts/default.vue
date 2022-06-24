<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
    >
      <v-list>
        <v-list-item
          router
          exact
          @click="
            () => {
              miniVariant = !miniVariant
            }
          "
        >
          <v-list-item-action v-if="miniVariant">
            <v-icon>mdi-menu</v-icon>
          </v-list-item-action>
          <v-list-item-content> </v-list-item-content>
          <v-list-item-icon v-if="!miniVariant">
            <v-icon>mdi-chevron-left</v-icon>
          </v-list-item-icon>
        </v-list-item>
        <v-list-item
          router
          to="/"
          exact
          @click="
            () => {
              miniVariant = !miniVariant
            }
          "
        >
          <v-list-item-action>
            <v-avatar
              color="white"
              tile
              max-width="24px"
              max-height="24px"
              min-width="24px"
              min-height="24px"
            >
              <v-img
                src="/dashboard-icon.svg"
                max-height="17"
                max-width="17"
                contain
              />
            </v-avatar>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title> Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="white" :clipped-left="clipped" fixed app>
      <v-row>
        <v-col class="d-flex align-center">
          <div class="d-flex">
            <v-img
              src="/advotics-logo-optimize.jpg"
              max-height="32"
              max-width="128.82"
              contain
            ></v-img>
            <div class="powered-by d-flex align-end ml-1">
              powered by
              <v-img
                src="/advotics-logo-optimize.jpg"
                max-height="16.93"
                max-width="72.46"
                class="ml-1"
                contain
              ></v-img>
            </div>
          </div>
        </v-col>
        <v-col class="d-flex justify-end align-center">
          <div>
            <div class="username">Username</div>
            <div class="company-name">Company Name</div>
          </div>
          <v-avatar size="32" class="mx-1" color="#BDBEC0">
            <v-icon dark> mdi-account </v-icon>
          </v-avatar>
          <v-btn icon color="#747373">
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
      <!-- <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <!-- <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: true,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>

<style>
.powered-by {
  color: #5b5b5b;
  font-size: 11px;
}

.username {
  font-size: 14px;
  font-weight: 600;
  color: #727272;
}

.company-name {
  font-size: 10px;
  font-weight: 300;
  color: #727272;
}
</style>
