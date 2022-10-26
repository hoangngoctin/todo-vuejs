<template>

  <body>
    <div class="container">
      <div class="slide" v-for="i in [currentIndex]" :key="i">
        <div class="item s1">
          <div class="content">
            <div class="name"></div>
            <div class="des"></div>
          </div>
        </div>

        <div class="item">
          <div class="content">
            <div class="name">Nếu một ngày:</div>
            <div class="des">
              9:00am thức dậy với một mớ suy nghĩ hỗn độn, ta phải làm gì cho ngày hôm nay. Đầu óc xáo rỗng, mục tiêu
              còn chưa được xác định rõ ràng. Chúng ta đâm đầu vào những sở
              thích vô bổ để giết chết thời gian. Cho đến
              hết ngày, một câu hỏi đặt ra là ta đã làm được gì hôm nay?
              Nếu ta cứ sống buông thả như vậy, thì thì ta chỉ là đang tồn tại chứ không phải là đang sống
             . Hãy bắt đầu thói quen lên danh sách công việc cần làm và hoàn thành nó. Hãy nghiêm khác với
              chính bản thân của mình hơn!
            </div>
          </div>
        </div>

        <div class="item">
          <div class="content">
            <div class="name"></div>
            <div class="des"></div>
          </div>
        </div>

        <div class="item">
          <div class="content">
            <div class="name"></div>
            <div class="des"></div>
          </div>
        </div>

        <div class="item">
          <div class="content">
            <div class="name"></div>
            <div class="des"></div>
          </div>
        </div>

        <div class="item">
          <div class="content">
            <div class="name"></div>
            <div class="des"></div>
          </div>
        </div>
      </div>

      <!-- <div class="buttons">
        <button @click="prev" id="prev"> - </button>
        <button @click="next" id="next"> + </button>
      </div> -->
    </div>
  </body>
</template>

<script>
export default {
  name: "slide",
  data() {
    return {
      images: [],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function () {
    this.startSlide();
  },

  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 50000);
    },

    next: function () {
      this.currentIndex += 1;
    },
    prev: function () {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function () {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>

<style scoped>
body {
  background-color: #eaeaea;
  overflow: hidden;
}

.container {
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  width: 1000px;
  height: 400px;
  padding: 50px;
  background-color: #f5f5f5;
  box-shadow: 0 30px 50px #dbdbdb;
}

#slide {
  width: max-content;
  margin-top: 50px;
}

.item:nth-child(1) {
  background-image: url(../image/10.jfif);
  width: 130px;
  height: 200px;
  background-position: 50% 50%;
  display: inline-block;
  transition: 0.5s;
  background-size: cover;
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translate(0, 24%);
  border-radius: 20px;
  box-shadow: 0 30px 50px #505050;
}

.item:nth-child(2) {
  background-image: url(../image/20.jpg);
  width: 130px;
  height: 200px;
  background-position: 50% 50%;
  display: inline-block;
  transition: 0.5s;
  background-size: cover;
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translate(0, 24%);
  border-radius: 20px;
  box-shadow: 0 30px 50px #505050;
}

.item:nth-child(3) {
  background-image: url(../image/12.jpg);
  width: 130px;
  height: 200px;
  background-position: 50% 50%;
  display: inline-block;
  transition: 0.5s;
  background-size: cover;
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translate(0, 24%);
  border-radius: 20px;
  box-shadow: 0 30px 50px #505050;
}

.item:nth-child(4) {
  background-image: url(../image/13.webp);
  width: 130px;
  height: 200px;
  background-position: 50% 50%;
  display: inline-block;
  transition: 0.5s;
  background-size: cover;
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translate(0, 24%);
  border-radius: 20px;
  box-shadow: 0 30px 50px #505050;
}

.item:nth-child(5) {
  background-image: url(../image/21.png);
  width: 130px;
  height: 200px;
  background-position: 50% 50%;
  display: inline-block;
  transition: 0.5s;
  background-size: cover;
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translate(0, 24%);
  border-radius: 20px;
  box-shadow: 0 30px 50px #505050;
}

.item:nth-child(6) {
  background-image: url(../image/22.jpg);
  width: 130px;
  height: 200px;
  background-position: 50% 50%;
  display: inline-block;
  transition: 0.5s;
  background-size: cover;
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translate(0, 24%);
  border-radius: 20px;
  box-shadow: 0 30px 50px #505050;
}

.item:nth-child(1) {
  left: 35%;
}

.item:nth-child(2) {
  left: 50%;
}

.item:nth-child(3) {
  left: calc(50% + 150px);
}

.item:nth-child(4) {
  left: calc(50% + 300px);
}

.item:nth-child(5) {
  left: calc(50% + 450px);
}

.item:nth-child(6) {
  left: calc(50% + 600px);
}

.content {
  position: absolute; 
  top: 60%;
  right: 350px;
  width: 300px;
  text-align: left;
  padding: 0;
  color: #000000;
  transform: translate(0, -50%);
  display: none;
  font-family: system-ui;
}

.item:nth-child(2) .content {
  display: block;
  z-index: 11111;
}

.name {
  font-size: 40px;
  font-weight: bold;
  opacity: 0;
  animation: showcontent 1s ease-in-out 1 forwards;
}

.des {
  margin: 20px 0;
  opacity: 0;
  animation: showcontent 1s ease-in-out 0.3s 1 forwards;
  font-weight: bold;
}

@keyframes showcontent {
  from {
    opacity: 0;
    transform: translate(0, 100px);
    filter: blur(33px);
  }

  to {
    opacity: 1;
    transform: translate(0, 0);
    filter: blur(0);
  }
}

.buttons {
  position: absolute;
  bottom: 30px;
  z-index: 222222;
  text-align: center;
  width: 100%;
}

.buttons button {
  width: 30px;
  height: 30px;
  border: 1px solid #555;
  transition: 0.5s;
  margin: 0 5px;
  font-weight: bold;
}

.buttons button:hover {
  background-color: #bac383;
}

.container {

  width: 100%;
  height: 80vh;
  animation: animate 60s ease-in-out infinite;
  background-size: cover;
}

@keyframes animate {

  0%,
  100% {
    background-image: url(../image/10.jfif);
  }

  20% {
    background-image: url(../image/20.jpg);
  }

  40% {
    background-image: url(../image/12.jpg);
  }

  60% {
    background-image: url(../image/13.webp);
  }

  80% {
    background-image: url(../image/21.png);
  }

  100% {
    background-image: url(../image/22.jpg);
  }
}

@media only screen and (min-width: 46.25em) and (max-width: 63.9375em) {
  .container{
    max-width: 100%;
  }
}

@media only screen and (max-width: 46.1875em){
  .container{
    max-width: 740px;
    
  }
  .content{
    right: 120px;
    top: 270%;
    color: #000;
  }
  .item:nth-child(1) {
    left: 80%;
    top: -90px;
    width: 100px;
    height: 60px
  }
  
  .item:nth-child(2) {
    left: 80%;
    top: calc(-90px - -70px);
    width: 100px;
    height: 60px
  }
  
  .item:nth-child(3) {
    left: 80%;
    top: calc(-90px - -140px);
    width: 100px;
    height: 60px 
  }
  
  .item:nth-child(4) {
    left: 80%;
    top: calc(-90px - -210px);
    width: 100px;
    height: 60px
  }
  
  .item:nth-child(5) {
    left: 80%;
    top: calc(-90px - -280px);
    width: 100px;
    height: 60px
  }
  
  .item:nth-child(6) {
    left: 80%;
    top: calc(-90px - -350px);
    width: 100px;
    height: 60px
  }
}
</style>