<template>

   <blog
    :pageTitle="title"
   
   ></blog>


</template>

<script>
    import Blog from '../../views/Blog.vue';

    export default {
        name: 'DeBlog',

        components: { Blog },

        data() {
            return {

             title: "meine Artikel (in Englisch)",
            

            }
        }

    }

</script>