
<template>
   <modal-modal v-if="dataSubmittedOk" title="Message">
      <template #default>

        <p>You message has been successfully submitted. Thank you for contacting me!</p>
         <div @click="closeModal" class="btn btn-success">OK</div>
      </template>
     
   </modal-modal>
     
  <div class="container"> 
    <div class="contact-me-header">
     <div class="row justify-content-md-center">
    
      <div class="col-md-6">
          <h2 class="text-warning">{{pageTitle}}</h2>
      </div>
      </div> 

      <!-- with clearValidity, the form must be submitted twice if I do not enter text into the 
            textarea field
      
      
      https://vueschool.io/lessons/vuejs-form-validation-diy

      https://stackoverflow.com/questions/61122296/vuelidate-validation-of-computed-property

      
         -->

      </div> 
          <div class="row justify-content-md-center">
           <div class="col-xs-12 col-md-6">

        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="uname">{{name}}</label>
            <input type="text" class="form-control"  id="uname" v-model.trim="form.uname.val"/>
             <p v-if="!nameIsValid">{{errorName}}</p>
          </div>
         
          <div class="form-group">
            <label for="email">{{email}}</label>
            <input type="text" class="form-control"  id="email" v-model.trim="form.email.val"/>  
             <p v-if="!emailIsValid">{{errorEmail}}</p>
            <p v-else-if="!emailIsCorrect">{{incorrectEmail}}</p>          
          </div>
          

          <div class="form-group">
            <label for="message">{{message}}</label>
            <textarea rows="4" id="message" class="form-control" v-model.trim="form.message.val"></textarea>  
            <p v-if="!messageIsValid">{{errorMessage}}</p>       
          </div>
           
        
            <button type="submit" class="btn btn-success">{{submitMessage}}</button>
         
        </form>

      </div>
    </div>
    </div>
</template>


<script>
import emailjs from 'emailjs-com';

//https://www.freecodecamp.org/news/send-emails-from-your-vue-application/?ref=morioh.com&utm_source=morioh.com

export default {

  props: {

      pageTitle:String,
      name:String,
      errorName:String,
      email:String,
      errorEmail:String,
      incorrectEmail:String,
      message:String,
      errorMessage:String,
      submitMessage:String
      

  },

  data() {

    return {

    form: {
      uname: {
        val: null,     
      },
      email: {
        val: null,
        regEmail: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,       
      },
      message: {
        val: null,       
      },
       },
        dataSubmittedOk: false,
        nameIsValid: true,
        emailIsValid: true,
        emailIsCorrect: true,
        messageIsValid:true

   
    }
  },

  methods: {

   sendEmail() {

            const emailParams = {
              uname: this.form.uname.val,
              email: this.form.email.val,
              message: this.form.message.val

            };
        
            emailjs.send('service_i29gl2f','template_ag44j5f', emailParams, 'user_f6cAp317SM1qodC25aeKc')     
            .then((result) => {
      
                this.successHttpMsg = true;
                console.log('SUCCESS!', result.status,result);
                if(result.status == 200) {
            
                this.dataSubmittedOk = true;                
                 
                }           
        }).catch(function(e) {
            
             this.error = e;  
             this.errorHttpMsg = true;          
              console.log("Caught",this.error);
            
        });
       
          
        },  
  
  submitForm() {

      this.nameIsValid = !!this.form.uname.val;
      this.emailIsValid = !!this.form.email.val;
      this.emailIsCorrect = this.validateEmail(this.form.email.val);
      this.messageIsValid = !!this.form.message.val;
  
      const formIsValid = this.nameIsValid && this.emailIsValid && this.emailIsCorrect && this.messageIsValid;
    

      if(formIsValid) {
        this.sendEmail();



      } else {

        console.log("Invalid form");
                
      }

  },
  
  validateEmail(value) {
      return (this.form.email.regEmail.test(value)) 

      
  },

  closeModal() {

    this.dataSubmittedOk = false;
    
    this.form.uname.val = null;
    this.form.email.val = null;
    this.form.message.val = null;
    
  }

  }}


</script>

<style scoped>

   .container {

     margin-bottom: 4rem;
   }

    label {
      color:#fff;


  }

  .contact-me-header {
      margin-top:4rem;
      margin-bottom: 3rem;

  }

  button {

    margin-top: 3rem !important;
    margin-left: 0 !important;

    
  }

  .form-group p {

    color:red;
  }

  .form-group.invalid input {
    border-color:red;
  }

   .form-group.invalid textarea {
    border-color:red;
  }

  .form-group.invalid label {
    border-color:red;
  }

 


</style>
