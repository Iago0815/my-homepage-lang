<template>

   <projects
    :pageTitle="title"
   
   ></projects>


</template>

<script>
    import Projects from '../../views/Projects.vue';

    export default {
        name: 'EnProjects',

        components: { Projects },

        data() {
            return {

             title: "Projects",
            

            }
        }

    }

</script>