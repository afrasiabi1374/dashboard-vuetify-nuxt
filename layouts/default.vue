<template>
  <v-app >
    <s-navigation-drawer
      :viva.sync="drawer"
      :mini-variant.sync="mini"
      app
      :hideOverlay="true"
      :absuloute="true"
      color="#1E1E1E"
    >
      <v-list-item :class="['w-full flex', mini ? 'justify-center': 'justify-end']">
        <s-btn class="float-right" @click.stop="mini = !mini">
          <v-icon color="white" class="w-auto">mdi-menu</v-icon>
        </s-btn>
      </v-list-item>
      <v-divider></v-divider>
      <br>
      <v-list>
        <template v-for="item in items">
          <v-list-group
            v-if="item.subList?.length"
            :key="item.title"
            v-model="item.active"
            :prepend-icon="item.icon"
            no-action
          >
          <template v-slot:prependIcon>
            <v-icon color="white">{{item.icon}}</v-icon>
          </template>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title class="white--text" v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="child in item.subList"
              :key="child.title"
            >
              <v-list-item-content>
                <nuxt-link to="/" class="white--text" v-text="child.title"></nuxt-link>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item :key="'item-'+item.title" v-else>
            <v-list-item-icon>
              <v-icon color="white" v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" class="white--text"></v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
    </s-navigation-drawer>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Assets', subList: [{title: 'all Deployed',icon: 'mdi-circle-outline', iconColor: 'white'}], icon: 'mdi-abacus' },
          { title: 'License',  icon: 'mdi-content-save' },
          { title: 'Accessories', icon: 'mdi-keyboard-variant' },
        ],
      mini: true,
    }
  },
}
</script>
<style lang="scss" >
.v-list__group__prepend-icon .v-icon {
  color: white;
}  
</style>
