<template>

   <blog
    :pageTitle="title"
   
   ></blog>


</template>

<script>
    import Blog from '../../views/Blog.vue';

    export default {
        name: 'EnBlog',

        components: { Blog },

        data() {
            return {

             title: "my Articles",
            

            }
        }

    }

</script>