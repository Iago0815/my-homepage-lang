<template>

   <home
    :mainQuote="quote"
    :quoteAuthor="author"
    :buttonText="buttonText"
    :compName="componentName"
   >
   <p class="quote">Never give up what you really want to do. The person with <b>big dreams</b> is more powerful than the one with all the facts.</p>

   
   </home>


</template>

<script>
    import Home from '../../views/Home.vue';

    export default {
        name: 'EnHome',

        components: { Home },

        data() {
            return {

             quote: "en",
             author: "Albert Einstein",
             buttonText: "Learn more!",
             componentName: "EnHome"

            }
        },

    }

</script>

<style scoped>

p.quote:before { 
          content: open-quote;
          font-weight: bold;
      } 

p.quote:after { 
          content: close-quote;
          font-weight: bold;
      }


</style>