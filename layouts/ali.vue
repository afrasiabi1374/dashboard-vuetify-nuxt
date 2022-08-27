<template>
<v-app >
  <div>
    <v-card
    class="float-left text-center fixed"
    height="100vh"
    width="256"

  >
    <v-navigation-drawer
      class=" accent-4 text-center"
      permanent
    >
      <v-img to="/" class="mx-auto mt-8" width="140" height="140" :src="logoSrc"></v-img>
      <v-list class="mt-16">
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :to="'/'+item.path"
            class="w-8/12 mx-auto list-item-custom mt-4"
            active-class="SelectedTile-active"
          >
            <div class="flex justify-center">
              <v-list-item-icon class="nav-icon-wrapper">
                <v-icon class="text-white nav-icon">{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <div class="item-title">
                  <v-list-item-title class="item-title">{{ item.title }}</v-list-item-title>
                </div>
              </v-list-item-content>
            </div>
          </v-list-item>
      </v-list>

      <template v-slot:append>
        <v-list-item>
            <v-badge
              bordered
              bottom
              color="deep-purple accent-4 "
              dot
              offset-x="10"
              offset-y="10"
              class="mx-auto"
            >
              <v-avatar size="40">
                <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
              </v-avatar>
            </v-badge>

        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>mr alex piching</v-list-item-title>
            <v-list-item-title>alex.pro.jo@gmail.com</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item >
            <v-btn class="ml-auto mr-1"><v-icon>mdi-account</v-icon></v-btn>
            <v-btn class="mr-auto ml-1"><v-icon>mdi-cog-outline</v-icon></v-btn>
        </v-list-item>
      </template>
    </v-navigation-drawer>
  </v-card>
  <v-main>  
    <v-container>
    <v-row >
      <v-col class="float-left col-md-6">
        <p class="text-5xl font-black	">property dashboard</p>
      </v-col>
      <v-col class="float-right col-md-6 flex justify-end">
        <v-btn class="mr-3">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn class="mr-3">
          <v-icon>mdi-bell-ring-outline</v-icon>
        </v-btn>
        <v-btn color="black" class="mr-3 white--text ">
          + Add New
        </v-btn>
      </v-col>
    </v-row>
    </v-container>

    <nuxt />
  </v-main>    
  </div>
  </v-app >
</template>

<script>
  export default {
    data: () => ({
      selectedItem: 0,
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard', path: '' },
          { title: 'Account', icon: 'mdi-account-box', path: 'account' },
          { title: 'Admin panel', icon: 'mdi-gavel', path: 'account' },
        ],
      logoSrc:require('~/static/logo.svg')
    }),
  }
</script>

<style lang="scss">
  .list-item-custom {
    border-radius: 10px;
    transition: all .3s;
    overflow: hidden;
    &:hover {
      transition: all .3s;
      background-color: rgba(150, 150, 150, 0.404);
    }
  }
  .SelectedTile-active {    
    color: white!important;
    font-weight: bold;
    background-color: rgb(0, 0, 0);
    .nav-icon {
      color: white!important;
    }
  }
  .item-title {
    width:100px;
    text-align: left;
    margin-left: 3px;
  }
  .nav-icon-wrapper {
    margin-right: 0!important;
  }
</style>