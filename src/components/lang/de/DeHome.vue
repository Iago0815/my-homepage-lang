<template>

   <home
    :mainQuote="quote"
    :quoteAuthor="author"
    :buttonText="buttonText"
    :compName="componentName"
   >
   <p class="quote">Gib das was dir wichtig ist <b>nicht auf</b> nur weil es nicht einfach ist.</p>

   
   </home>


</template>

<script>
    import Home from '../../views/Home.vue';

    export default {
        name: 'DeHome',

        components: { Home },

        data() {
            return {

             quote: "en",
             author: "Albert Einstein",
             buttonText: "Weitere Informationen!",
             componentName: "DeHome"

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