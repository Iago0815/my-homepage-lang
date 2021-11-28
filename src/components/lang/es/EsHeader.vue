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
        
           profTitle: "DESARROLLADOR WEB",
          home: "Inicio",
          projects: "Proyectos",
          blog: "Blog",
          design: "Diseño",
          about: "Acerca de",
          contact: "Contacto",
          path:"es"
        }

     },
         methods: {},   


        
    }


</script>