<template>
  <div id="login" class="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
   
    <main class="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <div>
            <h3 class="font-bold text-2xl">Welcome to Lake Ingestion</h3>
            <p class="text-gray-600 pt-2">Sign in to your account.</p>
        </div>

        <div class="mt-10">
            <form class="flex flex-col" >
                <div class="mb-6 pt-3 rounded bg-gray-200">
                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="email">Email</label>
               
                    <!-- <input type="text" id="email" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" /> -->
                      <NebEmail v-model="email" placeholder="email"  input-classes="text-gray-700 rounded-full border border-white px-8 h-12 focus:outline-none focus:border-primary-300 text-sm  md:text-sm" validation-classes="text-red-300 pt-2 h-4 mb-5 text-left font-semibold" @keypress.enter="loginClicked" :editable="true" :validationMessage="getValidationMessage('email')"/>
               
                  
                </div>
                <div class="mb-6 pt-3 rounded bg-gray-200">
                    <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">Password</label>
                    <!-- <input type="password" id="password" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"> -->
                <NebText v-model="password" @input="resetValidation" placeholder="password" class="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" :hidden="true"  validation-classes="text-red-300 pt-2 h-4 mb-5 text-left font-semibold" @keypress.enter="loginClicked" :editable="true" :validationMessage="getValidationMessage('password')"/>
                
                </div>
                <div class="flex justify-end">
                    <span  class="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6"><router-link :to="{name:'auth.reset-password'}" >Forgot your password?</router-link></span>
                </div>
                <button class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Sign In</button>
            </form>
        </div>
    </main>

    <div class="max-w-lg mx-auto text-center mt-12 mb-6">
        <p class="text-white">Don't have an account?<span class="font-bold hover:underline"><router-link :to="{name:'auth.register'}"> Sign up</router-link></span></p>

    </div>
  </div>
</template>

<script>
import   {NebEmail}  from "../../components/NebEmail.vue";
import {  NebText } from "../../components/NebText.vue";

import { ValidationError } from '../../auth/validationError'
export default {
  name: "Login",
  components:{
     
    
      NebEmail,NebText
  },
   data() {
    return {
      validationErrors: [],
       email: '',
         password: '',
      rememberMe: true,
    };
  },
  methods: {
    validationErrorHandler(error) {
      if (error instanceof ValidationError) {
        
        this.validationErrors = error.details;
      } else {
        throw error;
      }
    },
  getValidationMessage(field) {
    
      return (this.validationErrors.find(e => e.field === field) || {}).message;
    },

    resetValidation() {
      
      this.validationErrors = [];
    },
    // loginClicked() {
    //   this.$store.dispatch('auth/passwordLogin', { email: this.email, password: this.password , rememberMe: this.rememberMe});
    // },
  },
};

</script>
<style>
        .body-bg {
            background-color: #9921e8;
            background-image: linear-gradient(315deg, #9921e8 0%, #5f72be 74%);
        }
    </style>
