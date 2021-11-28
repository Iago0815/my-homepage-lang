<template>

  <div class="container-fluid">

    <the-header
    :profTitlte="profTitle"
    :home="home"
    :projects="projects"
    :blog="blog"
    :design="design"
    :about="about"
    :contact="contact"
    :path="path"></the-header>
 
  </div>

  
</template>



<script>

    import TheHeader from "../../TheHeader.vue";
    

    export default {
       components: { TheHeader },

     data() {
        return {
        
          profTitle: "WEB DEVELOPER",
          home: "Home",
          projects: "Projects",
          blog: "Blog",
          design: "Design",
          about: "About",
          contact: "Contact",
          path:"en"
       

            }},
         methods: {},   


        
    }


</script>