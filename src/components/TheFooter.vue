<template>
    
  <footer class="bg-dark text-white pt-5 pb-4">
    

      <div class="container text-center text-md-left">

        <div class="row text-center text-md-left">

          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-warning">Marco Alvarado</h5>
              <p>{{welcomeText1}}<br/>{{welcomeText2}}<strong @click="$router.push('contact')" style="cursor: pointer;" class="text-warning">{{welcomeText3}}</strong>
              </p>

          </div>

          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-warning">{{usefulLinks}}</h5>

              <p><a v-bind:href="'https://unsplash.com/'" target='_blank'>Unplash - free photos</a></p>
              <p><a v-bind:href="'https://browserleaks.com/ip'" target='_blank'>Browserleaks.com</a></p>
              <p><a  target='_blank' v-bind:href="'https://caniuse.com/'">Can I use?</a></p>
              <p><a  target='_blank' v-bind:href="'https://codesandbox.io/s/react-yud4c'">React Code Sandbox</a></p>


          </div>
             <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">

                <h5 class="text-uppercase mb-4 font-weight-bold text-warning">{{education}}</h5>

               <p><a target='_blank' v-bind:href="'https://www.udemy.com/'">Udemy academy</a></p>
              <p><a target='_blank' v-bind:href="'https://vuejs.amsterdam/'">Vue Amsterdam</a></p>
              <p><a target='_blank' v-bind:href="'https://vueschool.io/'">Vue school</a></p>
              <p><a target='_blank' v-bind:href="'https://react.school/'">React school</a></p>
        
             </div>  

             <div class="col-md-12 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 class="text-uppercase mb-4 font-weight-bold text-warning">{{contact}}</h5>

                <p>
                  <i class="fas fa-home mr-3"></i>Amsterdam Zuidoost

                </p>
                <p>
                  <i class="fas fa-envelope mr-3"></i>marcoalvarado2(at)gmail.com

                </p>
                <p>
                  <i class="fas fa-phone mr-3"></i>+49 1733133958

                </p>
                <p>
                  <i class="fas fa-phone mr-3"></i>+31 0684318951

                </p>
                </div>

                </div>
                <hr class="mb-4">

                <div class="row align-items-center">

                  <div class="col-md-7 col-lg-8">

                    <p>{{copyright}}

                      <strong class="text-warning">Marco Alvarado</strong>
                    </p>


                  </div>

                  <div class="col-md-5 col-lg-4">

                    <div class="text-center text-md-right">

                      <ul class="list-unstyled list-inline">

                        <li class="list-inline-item">
                          <a target='_blank' v-bind:href="'#'" class="btn-floating btn-sm text-white" style="font-size:23px;"> <i class="fab fa-facebook">
                            </i></a>                             
                        </li>
                        <li class="list-inline-item">
                          <a target='_blank' v-bind:href="'https://twitter.com/FreelanceAlv'" class="btn-floating btn-sm text-white" style="font-size:23px;"> <i class="fab fa-twitter">
                            </i></a>                             
                        </li>      
                        <li class="list-inline-item">
                          <a target='_blank'  v-bind:href="'https://www.linkedin.com/in/marco-alvarado-312927179'" class="btn-floating btn-sm text-white" style="font-size:23px;"> <i class="fab fa-linkedin-in">
                            </i></a>                             
                        </li>      
                        <li class="list-inline-item">
                          <a target='_blank'  v-bind:href="'https://github.com/Iago0815'" class="btn-floating btn-sm text-white" style="font-size:23px;"> <i class="fab fa-github">
                            </i></a>                             
                        </li>      

                      </ul>
                    </div>
                  </div>  

                </div>
       </div>
   
  </footer>

</template>

<script>

    export default {
      props: {
        welcomeText1:String,
        welcomeText2:String,
        welcomeText3:String,
        copyright:String,
        usefulLinks:String,
        education:String,
        contact:String
      }
    }
</script>


<style scoped>

a {
  text-decoration: none;
  color: white;
}

@media (min-width: 1600px) {

  footer {

    margin-top:6rem;
  }

  
}


    

</style>