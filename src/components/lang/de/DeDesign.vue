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
        name: 'DeDesign',

        components: { Design },

        data() {
            return {

             title: "Design", 
             mapTitle: "SVG map Kaffee Honduras",
             businessCardV: "SVG Visitenkarte verso",
             businessCardR: "SVG Visitenkarte recto"


            }
        }

    }

</script>