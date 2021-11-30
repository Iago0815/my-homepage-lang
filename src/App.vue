<template>

  <div class="container-fluid">

  <component :is="selectedHeader"></component>

    <router-view></router-view>

   <component :is="selectedFooter"></component>

  </div>

  
</template>

<script>
import EnHeader from './components/lang/en/EnHeader.vue';
import EnFooter from './components/lang/en/EnFooter.vue';
import EsHeader from './components/lang/es/EsHeader.vue';
import EsFooter from './components/lang/es/EsFooter.vue';
import DeHeader from './components/lang/de/DeHeader.vue';
import DeFooter from './components/lang/de/DeFooter.vue';



  export default {
     components: { EnHeader,EnFooter,EsHeader,EsFooter,DeHeader,DeFooter},

    data() {
      
      return {
      
      
      }
    },
    
       computed: {             
        selectedHeader() {                
          return this.$store.getters.getRouteForHeader;
        },

        selectedFooter() {
          return this.$store.getters.getRouteForFooter;             
        },
       },


        
  }       

  

</script>

<style>

 
      body {
        background: #fff url("./img/astro101.jpg") center center no-repeat;
        background-attachment: fixed;
        background-size: 100% auto;
        margin: 0;
        padding: 0;
      }

      @media (max-width: 66rem) {
        
        body {
          width: 100%;
          background: #fff url("./img/astro101c.jpg") center center no-repeat;
          background-attachment: fixed;
          background-size: 100% auto;
        }

      
      }


/* BOOTSTRAP */

.container-fluid {
   padding: 1px !important;
  
}

</style>
