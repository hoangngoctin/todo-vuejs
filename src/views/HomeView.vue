<template>
  <div class="container">
    <div class="khung">
      <div class="clock-inner" :class="color">
        <div class="hour">{{hours}}</div>
        <div class="dots">:</div>
        <div class="min">{{minutes}}</div>
        <div class="dots">:</div>
        <div class="secs">{{seconds}}</div>
        <div class="mode"></div>
      </div>
    </div>

    <div class="click">
      <button>"Click tại đây để ngưng thời gian"</button>
    </div>

    <div>
      <img src="../image/time.gif" alt="" style="width: 200px; border-raidius: 5px solid">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DigitalClock',
  props: {
    color: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  },
  methods: {
    setTime() {
      setInterval(() => {
        const date = new Date()
        this.hours = date.getHours()
        this.minutes = this.checkSingleDigit(date.getMinutes())
        this.seconds = this.checkSingleDigit(date.getSeconds())
      }, 1000)
    },
    checkSingleDigit(digit) {
      return ('0' + digit).slice(-2)
    }
  },
  mounted() {
    this.setTime()
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(45deg, #3c136b 50%, rgb(29 66 72 / 29%) 50%);
}

.hour,
.min,
.secs {
  font-size: 8em;
}

strong {
  color: blue;
}

p {
  font-family: 'Lucida Sans', sans-serif;
  font-size: 20px;
}

.clock-border {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 200px;
  background: linear-gradient(to right, grey, rgb(82, 76, 76));
}

.clock-inner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 300px;
  background: #222222;
  border-radius: 20px;
  color: red;
  box-shadow: 0 15px 20px 0 rgb(73 82 222 / 94%);
}

.dots {
  font-size: 70px;
}

.red {
  color: #b780f4;
}

.yellow {
  color: yellow;
}

.green {
  color: green;
}

.click button {
  width: max-content;
  height: 30px;
  border-radius: 5px;
  margin-top: 20px;
  height: 50px;
  font-size: 16px;
  font-weight: 600;
  font-family: unset;
  box-shadow: 10px 10px 10px 0 rgb(84 84 84 / 70%);
}

.click button:hover {
  font-weight: 600;
  color: rgb(72, 234, 245);
  background: rgb(1, 27, 45);
  position: relative;
  top: 50%;
  left: -100%;
  cursor: none;
}

@media only screen and (min-width: 46.25em) and (max-width: 63.9375em) {
  .clock-inner{
    width: 600px;
  }
}

@media only screen and (max-width: 46.1875em) {
  .clock-inner{
    width: 400px;
    height: 100px;
  }
  .hour, .min, .secs{
    font-size: 4em
  }
  .container{
    height: 85vh;
  }
}
</style>