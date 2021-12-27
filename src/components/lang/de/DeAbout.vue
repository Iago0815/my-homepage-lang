<template>

   <about
    :pageTitle="title"

   >
     <p style="color:#fff;">
                  

       Lieber Besucher, <br/><br/>
        Mein Name ist Marco Alvarado und ich bin Webentwickler. <br/><br/> Mein Fokus liegt derzeit auf dem Erstellen von SPAs mit vue.js und React.js. Ich habe angefangen, Webseiten mit HTML, CSS, JS (jQuery), PHP und mySQL zu erstellen.<br/><br/> Ich weiß, wie man APIs im Frontend und Backend integriert. Ich kann ebenfalls einen Backend-Server mit Node/Express einrichten und eine Datenbank wie MonogoDB einbinden. <br/><br/>
        Ich habe Kenntnisse in der Programmierung von JAVA und Python (Netzwerkprogrammierung) und Kenntnisse in der Linux-Administration (Ubuntu / Debian).<br/><br/>
                      
        Bitte klicken Sie  <span @click=" this.$router.push({path: 'contact'});" class="text-warning" style="cursor:pointer;">HIER</span> um mit mir in Kontakt zu treten.
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