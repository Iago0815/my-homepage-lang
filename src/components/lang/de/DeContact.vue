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
        name: 'DeContact',

        components: { Contact },

        data() {
            return {

             title: "Kontakt",
             name:"Name",
             errorName:"Bitte geben Sie einen Namen ein",
             email:"Email",
             errorEmail:"Bitte geben Sie Ihre Email Adresse ein",
             incorrectEmail:"Die Email Adresse ist nicht korrekt",
             message:"Nachricht",
             errorMessage:"Bitte geben Sie eine Nachricht ein",
             submitMessage:"Absenden"


            

            }
        }

    }

</script>