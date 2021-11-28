<template>

   <projects
    :pageTitle="title"
  
   ></projects>


</template>

<script>
    import Projects from '../../views/Projects.vue';

    export default {
        name: 'EsProjects',

        components: { Projects },

        data() {
            return {

             title: "Projéctos",
            

            }
        }

    }

</script>
