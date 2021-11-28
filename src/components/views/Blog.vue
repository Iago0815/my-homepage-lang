<template>
   <div class="container"> 
    <div class="blog-header">
     <div class="row">
    
      <div class="col">
          <h2 class="text-warning">{{pageTitle}}</h2>
      </div>
      </div>
      </div>
       <div class="row">
    
      <div class="col-md-4 col-lg-3 col-sm-6">
         <div class="card">
          <img class="card-img-top" src="../../img/articles/world_of_react.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">The world of React (an overview)</h5>
            <p class="card-text">This article gives a short summary of the most important react components and libraries.
            </p>
            <a href="https://www.linkedin.com/pulse/world-react-overview-marco-alvarado/" class="btn btn-success" target="_blank">Go to article</a>
          </div>
          </div>
      </div>
       <div class="col-md-4 col-lg-3 col-sm-6">
           <div class="card">
          <img class="card-img-top" src="../../img/articles/stripe_node_react.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Simple Stripe API Integration with node+express and react.js</h5>
            <p class="card-text">Stripe makes the payment process secure. How can it be integrated into a modern JS environment (frontend+backend) </p>
            <a href="https://www.linkedin.com/pulse/simple-stripe-api-integration-nodeexpress-reactjs-marco-alvarado/" class="btn btn-success" target="_blank">Go to article</a>
          </div>
          </div>
      </div>
       <div class="col-md-4 col-lg-3 col-sm-6">
           <div class="card">
          <img class="card-img-top" src="../../img/articles/reactjs-ajax.jpg" alt="Card image cap">
             <div class="card-body">
            <h5 class="card-title">react.js + http requests (AJAX)</h5>
            <p class="card-text">How does react handle http requests? This article provides a short overview.</p>
            <a href="https://www.linkedin.com/pulse/reactjs-http-requests-ajax-marco-alvarado/" class="btn btn-success" target="_blank">Go to article</a>
          </div>
          </div>
      </div>
       <div class="col-md-4 col-lg-3 col-sm-6">
          <div class="card">
          <img class="card-img-top" src="../../img/articles/mongo.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Setup MongoDB for your node.js + express application</h5>
            <p class="card-text">MongoDB, a noSQL database, can store the data of a modern web application. Setup and integation into a nodejs environment are explained.</p>
            <a href="https://www.linkedin.com/pulse/setup-mongodb-your-nodejs-express-application-marco-alvarado/" class="btn btn-success" target="_blank">Go to article</a>
          </div>
          </div>
      </div>
        <div class="col-md-4 col-lg-3 col-sm-6">
         <div class="card">
          <img class="card-img-top" src="../../img/articles/cors.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">CORS - what is this about?</h5>
            <p class="card-text">The browser by default blocks the javascript code of a third party. Hoe does CORS allow a thrird party to access the website of the current URL.</p>
            <a href="https://www.linkedin.com/pulse/cors-what-marco-alvarado/" class="btn btn-success" target="_blank">Go to article</a>
          </div>
          </div>
      </div>
        <div class="col-md-4 col-lg-3 col-sm-6">
         <div class="card">
          <img class="card-img-top" src="../../img/articles/emailjs_vuejs.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Email JS + vue.js</h5>
            <p class="card-text">Email JS allowes the user to send data directly to the email address of the site owner. This article dicusses the integration into a modern JS environment.
            </p>
            <a href="https://www.linkedin.com/pulse/email-js-vuejs-marco-alvarado/" class="btn btn-success" target="_blank">Go to article</a>
          </div>
          </div>
      </div>
      </div>

  </div>
 
</template>



<script>
//https://github.com/solodev/blog-design/blob/master/blog-detail.html

export default {
    props: {

        pageTitle:String
    }
}


</script>

<style scoped>

.blog-header {

      margin-top:4rem;
      margin-bottom: 4rem;
    }

.card {

  margin: 2rem 1rem;
  border: 0;
}

.card-body {
  color:#fff;
  background-color: #343a40;
}


</style>