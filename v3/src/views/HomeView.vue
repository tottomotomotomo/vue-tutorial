<template>
  <div class="home">
    <p>{{ value }}</p>
    <Calendar />

    <div class="data-wrapper">
      <div class="box" v-for="list in data">
        <h4>{{ list.title }}</h4>
          {{ list.main }}
          <knob v-model="list.point" :max="1000" :size="55" :disabled="true"></knob>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      value: 'hogehoge',
      data:[
        {
          "title":"aaaa",
          "main":"aaaaaaaaaaaaaa",
          "point": "100"
        },{
          "title":"bbbb",
          "main":"bbbbbbbbbbbbbb",
          "point": "200"
        },{
          "title":"cccc",
          "main":"cccccccccccccc",
          "point":"300"
        },{
          "title":"dddd",
          "main":"dddddddddddddd",
          "point":"400"
        },{
          "title":"eeee",
          "main":"eeeeeeeeeeeeee",
          "point":"600"
        },{
          "title":"ffff",
          "main":"ffffffffffffff",
          "point":"800"
        },{
          "title":"gggg",
          "main":"gggggggggggggg",
          "point":"1000"
        }
      ]
    }
  }
}
</script>

<style scoped>
.data-wrapper{
  width:820px;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
}
.box{
  width: 240px;
  height: 140px;
  border: black 1px solid;
  margin-bottom: 20px;
}
</style>
