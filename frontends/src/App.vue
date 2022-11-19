<template>
  <!-- <div id="app">
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.name }}</td>
          <td>{{ student.age }}</td>
          <td>{{ student.email }}</td>
        </tr>
      </tbody>
    </table>

    <form @submit.prevent="createStudent">
      <div class="form-group row">
        <input type="text" class="form-control col-3 mx-2" placeholder="name" v-model="onlystudent.name"/>
        <input type="text" class="form-control col-3 mx-2" placeholder="age" v-model="onlystudent.age"/>
        <input type="text" class="form-control col-3 mx-2" placeholder="email" v-model="onlystudent.email"/>
        <button class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div> -->
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
