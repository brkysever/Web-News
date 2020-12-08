<template>
  <div class="reviews">
    <div class="reviewsbox">
      <img class="reviewsImg" src="https://i.imgur.com/2QqIpVo.jpg" alt="" />
      <p class="reviewText">Oppo Reno4 Pro 5G review</p>
      <p class="dateR">19 Nov 2020</p>
    </div>
    <div class="reviewsbox">
      <img class="reviewsImg" src="https://i.imgur.com/OVhmS7j.jpg" alt="" />
      <p class="reviewText">Apple iPhone 12 Pro Max review</p>
      <p class="dateR">12 Nov 2020</p>
    </div>
    <div class="reviewsbox">
      <img class="reviewsImg" src="https://i.imgur.com/frYbqtQ.jpg" alt="" />
      <p class="reviewText">Camera test: iPhone 12 vs. 12 Pro vs. 11 Pro</p>
      <p class="dateR">10 Nov 2019</p>
    </div>
    <div class="reviewsbox">
      <img class="reviewsImg" src="https://i.imgur.com/2QqIpVo.jpg" alt="" />
      <p class="reviewText">Lorem ipsum dolor sit amet consectetur</p>
      <p class="dateR">10 Nov 2019</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reviews',
  components: {}
}
</script>

<style>
.reviewsImg{
  width: 100%;
  height: 220px;
}

.reviewText{
  padding: 15px 0px 20px 20px;
  font-size: 18px;
}
.dateR{
  color: gray;
  font-size: 9px;
  padding-left: 20px;
  padding-bottom: 20px;
}



</style>
