<template>
   
   <header>

     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
      </button>

      <a class="navbar-brand text-uppercase" href="#">Alvarado - {{profTitlte}}</a> 

     <div class="collapse navbar-collapse" id="navbarTogglerDemo03" v-on:click="closeMobileMenue">
      
       <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
         
          <li class="nav-item img-wrapper">
            
           <img class="flag-top" src="../img/flags/gb-nir.png" v-on:click="selectLanguage('EN')"/>
         
            <img class="flag-top" src="../img/flags/es.png" v-on:click="selectLanguage('ES')"/>
          
              <img class="flag-top" src="../img/flags/de.png" v-on:click="selectLanguage('DE')"/>

            
              
         </li><span class="vertical-bar">&nbsp;|&nbsp;</span>
         
         <li class="nav-item">
          <router-link class="nav-link" active-class="active" :to="{path: '/'+path+'/home'}" data-toggle="collapse" data-target=".navbar-collapse.show">{{home}}<span class="sr-only">(current)</span></router-link>
         </li>
           <li class="nav-item">
                <router-link class="nav-link" active-class="active" :to="{path: '/'+path+'/dsign'}" data-toggle="collapse" data-target=".navbar-collapse.show">{{design}}</router-link>
          </li>
         
         <li class="nav-item">
              <router-link class="nav-link" active-class="active" :to="{path: '/'+path+'/projects'}" data-toggle="collapse" data-target=".navbar-collapse.show">{{projects}}</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link" active-class="active" :to="{path: '/'+path+'/blog'}" data-toggle="collapse" data-target=".navbar-collapse.show">{{blog}}</router-link>
          </li>
        
            <li class="nav-item">
                <router-link class="nav-link" active-class="active" :to="{path: '/'+path+'/about'}" data-toggle="collapse" data-target=".navbar-collapse.show">{{about}}</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" active-class="active" :to="{path: '/'+path+'/contact'}" data-toggle="collapse" data-target=".navbar-collapse.show">{{contact}}</router-link>
            </li>


    </ul>
    
    
  </div>
</nav>

<!-- Full Page Image Header with Vertically Centered Content -->

<div class="masthead">
 
    
       <div class="d-flex justify-content-around">
          <img src="../img/moonphase/moon1.jpg">
          <img src="../img/moonphase/moon2.jpg">
          <img src="../img/moonphase/moon3.jpg">
          <img src="../img/moonphase/moon4.jpg">
          <img src="../img/moonphase/moon5.jpg">
          <img src="../img/moonphase/moon6.jpg">
          <img src="../img/moonphase/moon7.jpg">
          <img src="../img/moonphase/moon8.jpg"> 

      </div>
      
    </div>    
 
 </header>
</template>

<script>
    export default {
        props: {
        profTitlte:String,  
        home: String,
        projects: String,
        blog: String,
        design: String,
        about: String,
        contact: String,
        path:String,

        },


      data() {
        return { counter: 0,
                 hideMobileMenueActive: false }       
      },

      methods: {
            closeMobileMenue() {
                this.hideMobileMenueActive = !this.hideMobileMenueActive;
             
            },
            selectLanguage(lang) {
                
                this.$store.dispatch({
                  type:'switchLanguage',
                  value: lang
                })
                switch(lang) {
                  case 'EN':  this.$router.push({ path: '/en/home' });
                  break;

                  case 'ES':  this.$router.push({ path: '/es/home' });
                  break;

                  case 'DE':  this.$router.push({ path: '/de/home' });
                  break;

                }
               

            }
      },
      computed: {
          showLanguage() {
            return this.$store.getters.currentLanguage
          }
      }     

    }

</script>


<style scoped>


  header{ position:sticky; top: 0 ; z-index: 10;} 

  .masthead {
  height: 18vh;
   width:100%; 
  padding-top:2rem;
  background-color: black;

  }

/* menue */


img {
    height:50px;
    width:50px;
    margin:0;
 
}

span.vertical-bar {

  color:white;
  margin-top:0.3rem;
}

img.flag-top {
  margin-top:0.3rem;
   width: 40px;;
  height: auto;
  padding:8px 8px;
  cursor: pointer;

}

@media (max-width:430px) {

  img {
    height:20px;
    width:20px;
 
      }
  nav a {
        font-size: 0.8rem;

    }

  .masthead {
  height: 80%;
  padding-top:2rem;
 


  }

}

@media (min-width: 992px) { 

  img {
    height:100px;
    width:100px;
 
}
 
}

@media (max-width: 992px) { 

 span.vertical-bar {

   display:none;
}
 
}

 

</style>

