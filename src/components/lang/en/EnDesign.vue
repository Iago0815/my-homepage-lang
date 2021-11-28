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
        name: 'EnDesign',

        components: { Design },

        data() {
            return {

             title: "Design", 
             mapTitle: "SVG map Coffee Honduras",
             businessCardV: "SVG business card verso",
             businessCardR: "SVG business card recto"


            }
        }

    }

</script>