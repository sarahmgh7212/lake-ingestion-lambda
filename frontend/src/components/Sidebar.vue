<template>
    <div id="sidebar" class="h-screen w-16 menu bg-white text-white px-4 flex flex-col items-start justify-center  nunito static fixed shadow">
            <router-link :to="{name:'app.home'}">
                <div class="flex flex-row items-center py-3">
                    <div class="inline-block "><MdiIcon :icon="mdiHomeOutline" size="2rem" color="red" /></div>
                    <span class="w-full inline-block pb-1 md:pb-0 text-sm -ml-6   mt-2 text-gray-600 hover:text-indigo-400 ">Home</span>
                </div>
            </router-link>
            <router-link :to="{name:'pages.sources'}">
                <div class="flex flex-row items-center py-3">
                    <div class="inline-block "><MdiIcon :icon="mdiDatabaseArrowRight" size="2rem" color="red" /></div>
                    <span class="w-full inline-block pb-1 md:pb-0 text-sm  -ml-4 mt-2 text-gray-600 hover:text-indigo-400 ">Sources</span>
                </div>
            </router-link>
            <router-link :to="{name:'pages.destinations'}">
                <div class="flex flex-row items-center py-3">
                    <div class="inline-block "><MdiIcon :icon="mdiDatabaseArrowLeft" size="2rem" color="red" /></div>
                    <span class="w-full inline-block pb-1 md:pb-0 text-sm   mt-2 text-gray-600 hover:text-indigo-400 ">Destinations</span>
                </div>
            </router-link>
             <router-link :to="{name:'pages.jobs'}">
                <div class="flex flex-row items-center py-3">
                    <div class="inline-block "><MdiIcon :icon="mdiBriefcaseEdit" size="2rem" color="red" /></div>
                    <span class="w-full inline-block pb-1 md:pb-0 text-sm -ml-6  mt-2 text-gray-600 hover:text-indigo-400 ">Jobs</span>
                </div>
            </router-link>
            <router-link :to="{name:'pages.schedule'}">
                <div class="flex flex-row items-center py-3">
                    <div class="inline-block "><MdiIcon :icon="mdiCalendarMonthOutline" size="2rem" color="red" /></div>
                    <span class="w-full inline-block pb-1 md:pb-0 text-sm  -ml-2 mt-2 text-gray-600 hover:text-indigo-400 ">schedule</span>
                </div>
            </router-link>
             <router-link :to="{name:'pages.logs'}">
                <div class="flex flex-row items-center py-3">
                    <div class="inline-block "><MdiIcon :icon="mdiCalendarTextOutline " size="2rem" color="red" /></div>
                    <span class="w-full inline-block pb-1 md:pb-0 text-sm -ml-6  mt-2 text-gray-600 hover:text-indigo-400 ">Logs</span>
                </div>
            </router-link>
    </div>
    
</template>

<script lang="ts">
//import Vue from "vue";
 import  MdiIcon  from "./MdiIcon.vue";

import { mdiDatabaseArrowLeft, mdiDatabaseArrowRight,mdiHomeOutline,mdiCalendarMonthOutline,mdiCalendarTextOutline,mdiBriefcaseEdit } from '@mdi/js';
import { defineComponent } from "vue";
export default defineComponent({
  name: "Sidebar",
 components: {
    MdiIcon,
    // Home 
  },
  data() {
    return {
      mdiDatabaseArrowLeft, 
      mdiDatabaseArrowRight,
      mdiHomeOutline,
      mdiCalendarMonthOutline,
      mdiCalendarTextOutline,
      mdiBriefcaseEdit  
    };
  },
 
 
});
</script>
<style>
   .border-b-1 {
            border-bottom-width: 1px;
        }
        
        .border-l-1 {
            border-left-width: 1px;
        }
        
        hover\:border-none:hover {
            border-style: none;
        }
        
        #sidebar {
            transition: ease-in-out all .3s;
            z-index: 9999;
        }
        
        #sidebar span {
            opacity: 0;
            position: absolute;
            transition: ease-in-out all .1s;
        }
        
        #sidebar:hover {
            width: 180px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            /*shadow-2xl*/
        }
        
        #sidebar:hover span {
            opacity: 1;
        }
</style>
