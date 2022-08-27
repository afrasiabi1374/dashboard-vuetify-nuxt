<template>
  <v-container fluid>
    <v-tabs
      color="deep-purple accent-4"
      left
    >
    <template v-for="(tabName, i) in tabs" >
      <v-tab class="h-full"  style="white-space: nowrap;" :key="'tab'+tabName+i" :to="`#${tabName.name}`">
        {{tabName.name}}
      </v-tab>
    </template>
    <v-btn class="ml-auto">upload</v-btn>
      <v-tab-item  value="Info">
        <v-container fluid>
          <v-row class="flex justify-space-between">
            <v-col
            cols="12"
            md="8"
            >
            
              <v-simple-table>
                <template v-slot:default>
                  <tbody>
                    <tr
                    v-for="(item, i) in deviceTable"
                    :key="'tr-'+i"
                    >
                    <td :key="'device-title-'+i">{{ item.title }}</td>
                    <td :key="'device-detail-'+i">{{ item.detail }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
            <v-col
              cols="12"
              md="2"
            >
              <v-img
                :src="`https://picsum.photos/500/300?image=2`"
                :lazy-src="`https://picsum.photos/10/6?image=1`"
                aspect-ratio="1"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
      <v-tab-item value="License"  class="py-5 px-3">
        <s-alert
          rounded="lg"
          color="blue"
          type="warning"
          border="left"
        > No Results.</s-alert>
      </v-tab-item>
      <v-tab-item value="Components" class="py-5 px-3">
        <s-alert
          rounded="lg"
          color="blue"
          type="warning"
          border="left"
        > No Results.</s-alert>
      </v-tab-item>
      <v-tab-item value="Assets"  class="py-5 px-3">
        <s-alert
          rounded="lg"
          color="blue"
          type="warning"
          border="left"
        > No Results.</s-alert>
      </v-tab-item>

      <v-tab-item value="History" class="py-5 px-3">
        <v-card>
          <v-card-title class="col-md-3 ml-auto">
            <v-spacer></v-spacer>
            <s-text-field
              clearable
              v-model="searchHistory"
              rounded="lg"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></s-text-field>
          </v-card-title>
          <v-data-table
          :headers="historyHeaders"
          :items="historyTable"
          :search="searchHistory"
          >
            <template v-slot:item.download="{ item }">
              <img width="50" :src="item.download" />
            </template>
          </v-data-table>
        </v-card>
      </v-tab-item>
      
      <v-tab-item value="Maintenances" class="py-5 px-3">
        <v-card>
          <v-card-title class="col-md-3 ml-auto">
            <v-spacer></v-spacer>
            <s-text-field
              clearable
              v-model="searchMaintenance"
              rounded="lg"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></s-text-field>
          </v-card-title>
          <v-data-table
          :headers="maintenanceHeaders"
          :items="maintenanceTable"
          :search="searchMaintenance"
          >
          </v-data-table>
        </v-card>
      </v-tab-item>
      <v-tab-item  value="Files" class="py-5 px-3">


        <v-card>
          <v-card-title class="col-md-3 ml-auto">
            <v-spacer></v-spacer>
            <s-text-field
              clearable
              v-model="searchFile"
              rounded="lg"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></s-text-field>
          </v-card-title>
          <v-data-table
          :headers="fileHeaders"
          :items="fileTable"
          :search="searchFile"
          >


          <template v-slot:item.fileType="{ item }">
            <v-icon>{{ item.fileType }}</v-icon>
          </template>

          <template v-slot:item.image="{ item }">
            <s-image :src="item.image" width="50" height="50"> </s-image>
          </template>

          <template v-slot:item.download="{ item }">
            <s-btn small>
              <v-icon color="white">{{item.download}}</v-icon>
            </s-btn>
          </template>

          <template v-slot:item.actions="{ item }">
            <s-btn elevation="0" color="red" small>
              <v-icon color="white">{{item.actions}}</v-icon>
            </s-btn>
          </template>

          </v-data-table>
        </v-card>
      </v-tab-item>
      <v-tab-item value="Addiotional Files" class="py-5 px-3">
        <s-alert
          rounded="lg"
          color="blue"
          type="warning"
          border="left"
        > No Results.</s-alert>
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
        deviceTable: [
          {
            title: 'deleted',
            detail: 'Wed Jul 20, 2022'
          },
          {
            title: 'Status',
            detail: 'Ready to Deploy deployable'
          },
          {
            title: 'Serial',
            detail: '7af3b898-978f-31e6-8718-2435aa475b94'
          },
          {
            title: 'Category',
            detail: 'Invalid category'
          },
          {
            title: 'Model',
            detail: 'Macbook Pro 13'
          },
          {
            title: 'Model No.',
            detail: '2581025226447498'
          },
          {
            title: 'Purchase Date',
            detail: 'Sat Sep 11, 2021'
          },
          {
            title: 'Current Value',
            detail: 'USD 1.117,38'
          },
          {
            title: 'Order Number',
            detail: '#41970157'
          },
          {
            title: 'Depreciation',
            detail: 'Computer Depreciation (36 months )'
          },

        ],
        tabs: [
          {
            name: 'Info',
          },
          {
            name: 'License',
          },
          {
            name: 'Components',
          },
          {
            name: 'Assets',
          },
          {
            name: 'History',
          },
          {
            name: 'Maintenances',
          },
          {
            name: 'Files',
          },
          {
            name: 'Addiotional Files',
          },
        ],
        historyHeaders:[
          {
            text: 'Icon',
            value: 'icon'
          },
          {
            text: 'Date',
            value: 'date'
          },
          {
            text: 'Admin',
            value: 'admin'
          },
          {
            text: 'Action',
            value: 'action'
          },
          {
            text: 'Item',
            value: 'item'
          },
          {
            text: 'Target',
            value: 'target'
          },
          {
            text: 'Notes',
            value: 'notes'
          },
          {
            text: 'download',
            value: 'download'
          },
          {
            text: 'Changed',
            value: 'changed'
          }
        ],
        historyTable: [
            {
                icon: '',
                date: '	Sun Jul 24, 2022 4:46AM',
                admin: 'Admin User',
                action: 'uploaded',
                item: '(593166) - Macbook Pro 13"',
                target: '',
                notes: 'vue',
                download: require('~/assets/images/vue.png'),
                changed: ''
            }, 
            {
                icon: '',
                date: 'Sun Jul 24, 2022 4:43AM',
                admin: 'Admin User',
                action: 'restored',
                item: '(593166) - Macbook Pro 13"',
                target: '',
                notes: 'Boy',
                download: require('~/assets/images/boy.jpg'),
                changed: ''
            }, 
            {
                icon: '',
                date: '	Sun Jul 24, 2022 4:42AM',
                admin: 'Admin User',
                action: 'restored',
                item: '(593166) - Macbook Pro 13"',
                target: '',
                notes: 'tecladz banner',
                download: require('~/assets/images/banner.jpg'),
                changed: ''
            }

        ],
        searchHistory: '',
        searchMaintenance: '',
        maintenanceHeaders:[
            {
                text: 'Asset Name',
                value: ''
            },
            {
                text: 'Location',
                value: ''
            },
            {
                text: 'Asset Maintenance Type',
                value: ''
            },
            {
                text: 'Title',
                value: ''
            },
            {
                text: 'Start Date',
                value: ''
            },
            {
                text: 'Completion Date',
                value: ''
            },

        ],
        maintenanceTable: [
          {

          }
        ],
        searchFile: '',
        fileHeaders:[
          {
            text: 'File Type',
            value: 'fileType'
          },
          {
            text: 'Image',
            value: 'image'
          },
          {
            text: 'File',
            value: 'file'
          },
          {
            text: 'File Size',
            value: 'fileSize'
          },
          {
            text: 'Notes',
            value: 'notes'
          },
          {
            text: 'Download',
            value: 'download'
          },
          {
            text: 'Created At',
            value: 'createdAt'
          },
          {
            text: 'Actions',
            value: 'actions'
          },

        ],
        fileTable: [
          {
            fileType: 'mdi-image',
            image: require('~/assets/images/vue.png'),
            file: 'vue.png',
            fileSize: '1.58 KB	',
            notes: 'vue logo',
            download: 'mdi-download',
            createdAt: 'Sun Jul 24, 2022 4:46AM	',
            actions: 'mdi-delete-outline'
          },
          {
            fileType: 'mdi-image',
            image: require('~/assets/images/boy.jpg'),
            file: 'boy.jpg',
            fileSize: '103.30 KB	',
            notes: 'boy image at eron',
            download: 'mdi-download',
            createdAt: 'Sun Jul 24, 2022 4:46AM	',
            actions: 'mdi-delete-outline'
          },
          {
            fileType: 'mdi-image',
            image: require('~/assets/images/banner.jpg'),
            file: 'banner.jpg',
            fileSize: '1.98 MB	',
            notes: 'banner image in eron ',
            download: 'mdi-download',
            createdAt: 'Sun Jul 24, 2022 4:46AM	',
            actions: 'mdi-delete-outline'
          }
        ]
      }
    },
  }
</script>


<style>

</style>