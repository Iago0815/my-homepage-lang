<template>

   <home
    :mainQuote="quote"
    :quoteAuthor="author"
    :buttonText="buttonText"
    :compName="componentName"

   >
    <p class="quote">
    Nunca te rindas en aquello que realmente que realmente quieres hacer. Una persona con <b>grandes sueños</b> es más poderosa que una con todos los hechos.
        </p>
   </home>


</template>

<script>
    import Home from '../../views/Home.vue';

    export default {
        name: 'EnHome',

        components: { Home },

        data() {
            return {

             quote: "es",
             author: "Albert Einstein",
             buttonText: "¡Aprende más!",
             componentName: "EsHome"



            }
        }

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