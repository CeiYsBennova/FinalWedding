<template>
  <Navbar />
  <router-view></router-view>
  <Footer />
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
 /*  data () {
    return {
      onlystudent: {
        name: '',
        age: '',
        email: ''
      },
      students: []
    }
  },
  async created(){
    var response = await fetch('http://localhost:8000/api/students/')
    this.students = await response.json()
  },
  methods: {
    async createStudent(){
      var response = await fetch('http://localhost:8000/api/students/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.onlystudent)
      })
      this.students.push(await response.json())
    }
  }, */
}
</script>

<style>
#app {
<<<<<<< HEAD
  font-family: Arial, Helvetica, sans-serif;
=======
  font-family: MyriadPro_Regular;
>>>>>>> 1d25a11abb97b9aa770fdcb7281450a49d0d7833
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 16px;
}
</style>
