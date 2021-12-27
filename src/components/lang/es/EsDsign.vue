<template>

   <design
    :pageTitle="title"
    :mapTitle="mapTitle"
    :mapTitle2="mapTitle2"
    :mapTitle3="mapTitle3"
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
             mapTitle2: "Mapa SVG Café región Agalte",
             mapTitle3: "Mapa SVG Café región El Paraíso + Comayagua",
             businessCardV: "Verso de la tarjeta de visita SVG",
             businessCardR: "Recto de tarjeta de visita SVG"


            }
        }

    }

</script>