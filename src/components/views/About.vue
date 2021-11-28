<template>
  <div class="container"> 

    <div class="about-me-header">
    <div class="row">

      <div class="col-sm-3 col-md-2">
         <!-- empty -->

      </div>
      <div class="col-md-4">
          <h2 class="text-warning">{{pageTitle}}</h2>
      </div>
  
      </div>
    </div>  

    <div class="about-me-body">

     <div class="row">

      <div class="col-sm-0 col-md-2">

                  <!-- empty -->

              </div>
            <div class="col-sm-3 col-md-4">

                 <img class="img-fluid" src="../../img/myself.png" >

            </div>

             <div class="col-sm-9 col-md-6">

                 <slot></slot>

               
             </div>
             </div>
        </div>
       </div>
</template>

<script>

export default {
    props: {
        pageTitle:String,
       
    },  
}
</script>


<style scoped>

    .about-me-header{

      margin-top:4rem;
      margin-bottom: 4rem;
    }

    .about-me-body{
     
     margin-top:2rem;
     margin-bottom: 8rem;
       

    }


     @media (max-width: 575px) {
      
      img {

        width:30%;
      }    

      p {

        margin-top: 2rem;
      }
 }

</style>
