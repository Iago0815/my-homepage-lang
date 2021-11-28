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

  export default {
     components: { EnHeader,EnFooter,EsHeader,EsFooter},

    data() {
      
      return {
        currentRoute:null
      }
    },
    

     
        computed: {
         changeLang() {
        return this.$store.getters.currentLanguage;
      },  
        // eslint-disable-next-line vue/return-in-computed-property
        selectedHeader() {    
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.currentRoute = this.$store.getters.getRoute
          console.log(this.currentRoute);

          if(this.currentRoute.includes("en")) {
              return "en-header";
          }

          else if(this.currentRoute.includes("es")) {          
              return "es-header";     
          }
        },

        // eslint-disable-next-line vue/return-in-computed-property
        selectedFooter() {
             // eslint-disable-next-line vue/no-side-effects-in-computed-properties
             this.currentRoute = this.$store.getters.getRoute
          console.log(this.currentRoute);

          if(this.currentRoute.includes("en")) {
              return "en-footer";
          }

          else if(this.currentRoute.includes("es")) {          
              return "es-footer";     
          }
        },


        },
        
    



    

   watch: {

       changeLang(value) {
       console.log(`Language ${value}`);

       if(value == "EN") {
          this.selectedHeader = "en-header",
        this.selectedFooter = "en-footer"
       }

       else if(value == "ES") {
          this.selectedHeader = "es-header",
        this.selectedFooter = "es-footer"
       }
    }



    },



    methods: {

      moveToPage(newPage) {

            this.$emit('change-page',newPage);

          },

      initiateHeaderAndFooter(path){

        

          if(path.includes("en")) {

         this.selectedHeader = "en-header",
        this.selectedFooter = "en-footer"
        }
        else if(path.includes("es")) {

             this.selectedHeader = "es-header",
        this.selectedFooter = "es-footer"

        }

      },
      
    }
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
