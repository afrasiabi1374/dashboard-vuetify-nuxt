<template>
    <v-card>
      <v-btn  @click="changeTheme('default')" >
        default
      </v-btn>
      <v-btn  @click="changeTheme('ali')" >
        ali
      </v-btn>
      <v-card-title>
        <h2>
          All Assets
        </h2>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>

    <v-flex>
      <v-data-table
      :headers="headers"
      :items="devices"
      :search="search"
      v-model="selected"
      :single-select="singleSelect"
      item-key="name"
      show-select
      class="elevation-1"
      style="white-space: nowrap;"
      >
        <template v-slot:item.deviceImage="{ item }">
          <img width="50" :src="item.deviceImage" />
        </template>
        <template v-slot:item.assetTag="{ item }">
          <nuxt-link width="50" :to="`/hardware/${item.id}`" >{{item.assetTag}}</nuxt-link>
        </template>
        <template v-slot:item.serial="{ item }">
          <nuxt-link width="50" :to="{path: '/device', params: item.id }" >{{item.serial}}</nuxt-link>
        </template>
        <template v-slot:item.model="{ item }">
          <nuxt-link width="50" :to="{path: '/model', params: item.model }" >{{item.model}}</nuxt-link>
        </template>
        <template v-slot:item.category="{ item }">
          <nuxt-link width="50" :to="{path: '/category', params: item.category }" >{{item.category}}</nuxt-link>
        </template>
        <template v-slot:item.status="{ item }">
          <s-badge dot left></s-badge>
          <nuxt-link width="50" :to="{path: '/category', params: item.status }" >{{item.status}}</nuxt-link>
          <s-chip
          xSmall
          noMargin
          color="grey"
          textColor="black"
          >deployed</s-chip>
        </template>
        <template v-slot:item.chekedOutTo="{ item }">
          <v-icon color="blue">mdi-account</v-icon>
          <nuxt-link width="50" :to="{path: '/category', params: item.chekedOutTo }" >{{item.chekedOutTo}}</nuxt-link>
        </template>
        <template v-slot:item.location="{ item }">
          <nuxt-link width="50" :to="{path: '/category', params: item.location }" >{{item.location}}</nuxt-link>
        </template>
        <template v-slot:item.checkinCheckout="{ item }">
          <s-btn
          small
          elevation="12"
          :color="item.checkinCheckout == 'checkin'  ? 'purple' : 'pink' "
          class="white--text"
          >{{item.checkinCheckout}}</s-btn>
        </template>
        <template v-slot:item.checkinCheckout="{ item }">
          <s-btn
          small
          elevation="12"
          :color="item.checkinCheckout == 'checkin'  ? 'purple' : 'pink' "
          class="white--text"
          >{{item.checkinCheckout}}</s-btn>
        </template>
        <template v-slot:item.actions="{ item }">
          <s-btn
          small
          elevation="12"
          color="cyan"
          class="white--text"
          >
            <v-icon dense small>mdi-content-copy</v-icon>
          </s-btn>
          <s-btn
          small
          elevation="12"
          color="orange"
          class="white--text"
          >
            <v-icon dense small>mdi-pencil</v-icon>
          </s-btn>
          <s-btn
          small
          elevation="12"
          color="red"
          class="white--text"
          >
            <v-icon dense small>mdi-delete</v-icon>
          </s-btn>
        </template>
      </v-data-table>
    </v-flex>
  </v-card>
</template>

<script>
  export default {
    layout (context) {
      console.log(context.store.getters.getMode)
      return context.store.getters.getMode
    },
    computed:{
      computedMode(){
        return this.$store.getters.getMode
      }
    },
    methods:{
      changeTheme(mode){
        this.$store.commit('SET_THEME_MODE', mode)
        this.$nuxt.setLayout(this.computedMode)
      }
    },
    data () {
      return {
        selected: [],
        singleSelect: false,
        search: '',
        headers: [
          {
            text: 'asset name',
            align: 'start',
            sortable: true,
            value: 'name',
          },
          { text: 'Device Image', value: 'deviceImage' },
          { text: 'Asset Tag', value: 'assetTag' },
          { text: 'Serial', value: 'serial' },
          { text: 'Model', value: 'model' },
          { text: 'Category', value: 'category' },
          { text: 'Status', value: 'status' },
          { text: 'Checked Out To', value: 'chekedOutTo' },
          { text: 'Location', value: 'location' },
          { text: 'Purchase Cost', value: 'purchaseCost' },
          { text: 'IMEI', value: 'imei' },
          { text: 'RAM', value: 'ram' },
          { text: 'CPU', value: 'cpu' },
          { text: 'MAC Address', value: 'macAddress' },
          { text: 'fszfff', value: 'fszfff' },
          { text: 'Screen resolution', value: 'screenResolution' },
          { text: 'Kunstler', value: 'kunstler' },
          { text: 'Checkin/Checkout', value: 'checkinCheckout' },
          { text: 'actions', value: 'actions' },
        ],
        devices: [
          {
            id: 1,
            assetName: 'Frozen Yogurt',
            deviceImage: require('~/assets/images/devices/mbp.jpg'),
            assetTag: '49657544-changed',
            serial: 'f2f4891b-676f-3623-9941-1e7e501ef4a0',
            model: 'Macbook Pro 13"',
            category: 'Laptops',
            status: 'Ready to Deploy',
            chekedOutTo: 'pter holz',
            location: 'South Wilberfurt',
            purchaseCost: '1,609.03' ,
            imei: '',
            phoneNumber: '09126565888',
            ram: 16 + 'GB',
            cpu: 'xeon',
            macAddress: 'a14g15c16',
            fszfff: '',
            screenResolution: '1600*800',
            Kunstler: '',
            checkinCheckout: 'checkin',
            actions: [true, true, false]

          },
          
        ],
      }
    },
  }
</script>

<style>

</style>