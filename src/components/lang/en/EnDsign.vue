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
        name: 'EnDesign',

        components: { Design },

        data() {
            return {

             title: "Design", 
             mapTitle: "SVG map Coffee Honduras",
             mapTitle2: "SVG map Agalte coffee region",
             mapTitle3:  "SVG map El Paraíso + Comayagua coffee region",
             businessCardV: "SVG business card verso",
             businessCardR: "SVG business card recto"


            }
        }

    }

</script>