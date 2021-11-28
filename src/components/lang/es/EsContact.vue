<template>

   <contact
    :pageTitle="title"
    :name="name"
    :errorName="errorName"
    :email="email"
    :errorEmail="errorEmail"
    :incorrectEmail="incorrectEmail"
    :message="message"
    :errorMessage="errorMessage"
    :submitMessage="submitMessage"

   
   ></contact>


</template>

<script>
    import Contact from '../../views/Contact.vue';

    export default {
        name: 'EsContact',

        components: { Contact },

        data() {
            return {

             title: "Contacto",
             name:"Nombre",
             errorName:"Introduzca su nombre",
             email:"Correo electrónico",
             errorEmail:"Por favor ingrese su correo electrónico",
             incorrectEmail:"El correo electrónico no es correcto",
             message:"Mensaje",
             errorMessage:"Introduzca un mensaje",
             submitMessage:"Enviar"


            

            }
        }

    }

</script>