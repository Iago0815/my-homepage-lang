<template>
  <div class="container">

      <div class="row">
        <div class="col">
            <h2 class="text-warning">{{pageTitle}}</h2>


        </div>
        </div> 
      <div class="projects-container">
      <div class="row"> 
            <div class="col col-6 col-lg-4">
              <h3>{{links[0].name}}</h3>
           <p><a :href="links[0].url" target='_blank'>Link</a></p>
             <img class="img-fluid" src="../../img/projects/vandee_globe_fan.jpg"/>
           </div>
            <div class="col col-6 col-lg-4">
           <h3>{{links[1].name}}</h3>
         <p><a :href="links[1].url" target='_blank'>Link</a></p>
           <p><img class="img-fluid" src="../../img/projects/cp_editor1.jpg"/></p>
            <p><img class="img-fluid" src="../../img/projects/cp_editor4.jpg"/></p>
           </div>
           <div class="col col-6 col-lg-4">
               <h3>{{links[2].name}}</h3>
              <p><a :href="links[2].url" target='_blank'>Link</a></p>
               <p><img class="img-fluid" src="../../img/youtube_viewer.jpg"/></p>
              

           </div>
              <div class="col col-6 col-lg-4">
               <h3>{{ links[3].name}}</h3>
              <p><a :href="links[3].url" target='_blank'>Link</a></p>
               <p><img class="img-fluid" src="../../img/projects/weather_API.jpg"/></p>
              

           </div>
      </div> 
      </div>  
  </div>
</template>

<script>

export default {

    props: {
      pageTitle:String
    },

    data() {
       return {
          links: [
            {name: "Vandee Globe fan page", 
             url: "https://vue-http-demo-6781e.web.app/skipper"
             },
            
            {name: "Cherry Picks Editor",
             url: "https://dev.malvarado.net/cherry/login.php",
             },
            
             {name: "Youtube Viewer",
             url: "https://affectionate-shirley-b00be9.netlify.app/",
             },
                 
            {name: "weather API",
             url: "../weather/index.php",
            }    
          ]

        }
      }
}


</script>

<style scoped>


  div.container .row .col  {
    color:#fff;

      }

  div.container div div h3 {

    z-index: -1;
    color:#fff;

    }

  div.container .row .col h2 {
    display:inline-block;
    margin-top:4rem;
    margin-bottom: 4rem;
 
        
      }

  div.projects-container {
    margin-bottom: 3rem;

      }

    @media (max-width: 66rem) {
      
       div.container .row .col h2 {
  

        margin-top:4rem;
        margin-bottom: 2rem;
 
        
      }
       

    }




</style>