<template>
  <div class="radial-progress-bar">
    <vue-countdown :time="time" v-slot="{ days, hours, minutes, seconds }">
      <div class="flex-view">
        <div>
          <radial-progress-bar
            :diameter="diameter"
            :completed-steps="days"
            :total-steps="60"
            :animateSpeed="1000"
            :strokeWidth="strokeWidth"
            :innerStrokeWidth="innerStrokeWidth"
            :startColor="startColor"
            :stopColor="stopColor"
            :innerStrokeColor="innerStrokeColor"
          >
            <p class="completedSteps">{{ days }}</p>
          </radial-progress-bar>
          <span class="label-style">Ngày</span>
        </div>
        &nbsp;&nbsp;
        <div>
          <radial-progress-bar
            :diameter="diameter"
            :completed-steps="hours"
            :total-steps="60"
            :animateSpeed="1000"
            :strokeWidth="strokeWidth"
            :innerStrokeWidth="innerStrokeWidth"
            :startColor="startColor"
            :stopColor="stopColor"
            :innerStrokeColor="innerStrokeColor"
          >
            <p class="completedSteps">{{ hours }}</p>
          </radial-progress-bar>
          <span class="label-style">Giờ</span>
        </div>
        &nbsp;&nbsp;
        <div>
          <radial-progress-bar
            :diameter="diameter"
            :completed-steps="minutes"
            :total-steps="60"
            :animateSpeed="1000"
            :strokeWidth="strokeWidth"
            :innerStrokeWidth="innerStrokeWidth"
            :startColor="startColor"
            :stopColor="stopColor"
            :innerStrokeColor="innerStrokeColor"
          >
            <p class="completedSteps">{{ minutes }}</p>
          </radial-progress-bar>
          <span class="label-style">Phút</span>
        </div>
        &nbsp;&nbsp;
        <div>
          <radial-progress-bar
            :diameter="diameter"
            :completed-steps="seconds"
            :total-steps="60"
            :animateSpeed="1000"
            :strokeWidth="strokeWidth"
            :innerStrokeWidth="innerStrokeWidth"
            :startColor="startColor"
            :stopColor="stopColor"
            :innerStrokeColor="innerStrokeColor"
          >
            <p class="completedSteps">{{ seconds }}</p>
          </radial-progress-bar>
          <span class="label-style">Giây</span>
        </div>
      </div>
    </vue-countdown>
  </div>
</template>

<script>
import RadialProgressBar from "vue-radial-progress";
import VueCountdown from "@chenfengyuan/vue-countdown";

export default {
  name: "CountdownTimer",
  data() {
    const now = new Date();
    const deadline = new Date("December 7 2022 23:59:59");
    return {
      diameter: 80,
      strokeWidth: 8,
      innerStrokeWidth: 4,
      time: deadline - now,
      startColor: "#192e5b",
      stopColor: "#BB1924",
      innerStrokeColor: "#E5E5E5",
    };
  },
  components: {
    RadialProgressBar,
    VueCountdown,
  },
};
</script>
<style scoped>
.flex-view {
  display: flex;
  flex-wrap: wrap;
  
}
.completedSteps {
  font-size: 35px;
  color: #192e5b;
}
.label-style {
  color: #192e5b;
  font-size: 20px;
}
</style>
