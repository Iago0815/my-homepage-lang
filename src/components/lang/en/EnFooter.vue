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
        
          welcomeText1: "Hello, thanks a lot for navigating through my site. ",
          welcomeText2: "If you have any questions plase contact me ",
          welcomeText3: "HERE",
            copyright: "Copyright 2021 All rights reserved by",
          usefulLinks: "useful Links",
          education: "education",
          contact: "contact"
       
       

            }},
         methods: {},   


        
    }


</script>