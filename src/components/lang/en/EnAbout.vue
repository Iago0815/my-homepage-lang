<template>

   <about
    :pageTitle="title"
   >
     <p style="color:#fff;">
                  

        Dear visitors, <br/><br/>
        My name is Marco Alvarado and I'm a web developer. <br/><br/> My focus right now is on building SPA's with vue.js and react.js. I have started developing websites with HTML, CSS, JS (jQuery), PHP and mySQL<br/><br/> I know how to integrate APIs on the frontend and backend. I can also setup a backend server with node/express and incoporate a database like MonogoDB. <br/><br/> 
        I have knowledge in programming JAVA and Python (network programming) and admin skills in Linux administration (Ubuntu / Debian).<br/><br/>
                      
        Please click  <span @click=" this.$router.push({path: 'en/contact'});" class="text-warning" style="cursor:pointer;">HERE</span> to get in contact with me.
            </p>
   
   </about>


</template>

<script>
    import About from '../../views/About.vue';

    export default {
        name: 'EnAbout',

        components: { About },

        data() {
            return {

             title: "About",
            

            }
        },
         methods: {
              navigateToContact() {
                   

              }      

           } 


    }

</script>