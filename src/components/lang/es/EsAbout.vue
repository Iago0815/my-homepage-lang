<template>

   <about
    :pageTitle="title"
    @navigateToContact="navigateToContact"
   
   >
     <p style="color:#fff;">
                  

        Estimados visitantes, <br/> <br/>
        Mi nombre es Marco Alvarado y soy desarrollador web. <br/> <br/> Mi enfoque en este momento es crear SPA con vue.js y react.js. Comencé a desarrollar sitios web con HTML, CSS, JS (jQuery), PHP y mySQL <br/> <br/> Sé cómo integrar API en el frontend y backend. También puedo configurar un servidor backend con node / express e incorporar una base de datos como MonogoDB. <br/> <br/>
        Tengo conocimientos en programación JAVA y Python (programación de redes) y habilidades administrativas en administración de Linux (Ubuntu / Debian). <br/> <br/>
                      
        Por favor haz click  <span @click="navigateToContact" class="text-warning" style="cursor:pointer;">AQUÍ</span> 
        para ponerse en contacto conmigo.</p>
   
   </about>


</template>

<script>
    import About from '../../views/About.vue';

    export default {
        name: 'EsAbout',

        components: { About },

        data() {
            return {

             title: "About",
            

            }
        },
           methods: {
              navigateToContact() {
                    this.$router.push({path: 'es/contact'});

              }      

           } 
        }



</script>