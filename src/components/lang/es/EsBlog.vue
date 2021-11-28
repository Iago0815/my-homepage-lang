<template>

   <blog
    :pageTitle="title"
   
   ></blog>


</template>

<script>
    import Blog from '../../views/Blog.vue';

    export default {
        name: 'EsBlog',

        components: { Blog },

        data() {
            return {

             title: "Mis Artículos (Inglés)",
            

            }
        }

    }

</script>