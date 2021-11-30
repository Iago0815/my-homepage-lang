<template>

   <projects
    :pageTitle="title"
   
   ></projects>


</template>

<script>
    import Projects from '../../views/Projects.vue';

    export default {
        name: 'DeProjects',

        components: { Projects },

        data() {
            return {

             title: "Projekte",
            

            }
        }

    }

</script>