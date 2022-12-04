<template>
  <div>
    <table class="table">
      <thead>
        <th>Ky quay</th>
        <th>Ket qua</th>
        <th>Gia dac biet</th>
        <th>Giai nhat</th>
        <th>Giai nhi</th>
        <th>Giai ba</th>
      </thead>

      <tbody>
        <tr v-for="result in results" :key="result.id">
          <td>{{ result.kyQuay }}</td>
          <td>{{ result.ketQua }}</td>
          <td>{{ result.giaiDacBiet }}</td>
          <td>{{ result.giaiNhat }}</td>
          <td>{{ result.giaiNhi }}</td>
          <td>{{ result.giaiBa }}</td>
        </tr>
      </tbody>
    </table>
  </div>  
</template>

<script>
export default {
    name: 'Results',
    data() {
        return {
            result:{
                kyQuay: '',
                ketQua: '',
                giaiDacBiet: '',
                giaiNhat: '',
                giaiNhi: '',
                giaiBa: ''
            },
            results: []
        }
    },
    async created() {
        const response = await fetch('http://127.0.0.1:8000/api/jackterry/');
        this.results = await response.json();
    }
}
</script>

<style>

</style>