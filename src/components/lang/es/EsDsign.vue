<template>

   <design
    :pageTitle="title"
    :mapTitle="mapTitle"
    :businessCardV="businessCardV"
    :businessCardR="businessCardR"
   
   ></design>


</template>

<script>
    import Design from '../../views/Design.vue';

    export default {
        name: 'EsDesign',

        components: { Design },

        data() {
            return {

             title: "Diseño", 
             mapTitle: "Mapa SVG Café Honduras",
             businessCardV: "Verso de la tarjeta de visita SVG",
             businessCardR: "Recto de tarjeta de visita SVG"


            }
        }

    }

</script>