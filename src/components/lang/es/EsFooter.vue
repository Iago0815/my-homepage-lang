<template>

  <div class="container-fluid">

    <the-footer
    :welcomeText1="welcomeText1"
    :welcomeText2="welcomeText2"
    :welcomeText3="welcomeText3"
    :copyright="copyright"
    :usefulLinks="usefulLinks"
    :education="education"
    :contact="contact"
   ></the-footer>
 
  </div>

  
</template>



<script>

    import TheFooter from "../../TheFooter.vue";
    

    export default {
       components: { TheFooter },

     data() {
        return {
        
          welcomeText1: "Hola, muchas gracias por navegar por mi sitio.",
          welcomeText2: "Si tiene alguna pregunta por favor contácteme ",
          welcomeText3: "AQUÍ",
           copyright: "Copyright 2021. Todos los derechos reservados por",
          usefulLinks: "Enlaces útiles",
          education: "Educación",
          contact: "Contacto",
        

            }},
         methods: {},   


        
    }


</script>