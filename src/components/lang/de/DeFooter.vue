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
        
          welcomeText1: "Vielen Dank für den Besuch meiner Seite. ",
          welcomeText2: "Haben Sie weitere Fragen? Bitte kontaktieren Sie mich ",
          welcomeText3: "HERE",
            copyright: "Copyright 2021 Alle Rechte vorbehalten",
          usefulLinks: "useful Links",
          education: "Weiterbildung",
          contact: "Kontakt"
       
       

            }},
         methods: {},   


        
    }


</script>