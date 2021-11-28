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
        name: 'EnContact',

        components: { Contact },

        data() {
            return {

             title: "Contact me",
             name:"Name",
             errorName:"Please enter your name",
             email:"Email",
             errorEmail:"Please enter your email",
             incorrectEmail:"Email is not correct",
             message:"Message",
             errorMessage:"Please enter a message",
             submitMessage:"Submit"


            

            }
        }

    }

</script>