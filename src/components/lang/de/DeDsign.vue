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
        name: 'DeDesign',

        components: { Design },

        data() {
            return {

             title: "Design", 
             mapTitle2: "SVG Karte Region Agalte",
             mapTitle3: "SVG Karte Region El Paraíso + Comayagua",
             mapTitle: "SVG Karte Kaffee Honduras",
             businessCardV: "SVG Visitenkarte verso",
             businessCardR: "SVG Visitenkarte recto"


            }
        }

    }

</script>