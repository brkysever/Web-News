<template>
  <div class="reviewPosts">

<div>
     <router-link   to="/comments">
    <button class="commentsButton">COMMENTS</button>
    </router-link> 
    <button class="commentsButton">POST COMMENT</button>
    <button class="commentsButton">SPECS</button>
</div>
<div>
    <h1 class="headerText">Apple İphone 12 Pro Max review</h1>
    <p class="date">12 Nov. 2020</p>
    <img class="reviewImage" src="https://i.imgur.com/FCtlyyn.jpg" alt="12ProMax" >
    <img class="stars" src="https://i.imgur.com/Wn3WYcs.png">
</div>

<div class="stordiv">
<p>128GB 6GB RAM</p>
<img class="amazonImg" src="https://i.imgur.com/ePXROoE.png" alt="">
<p class="price">$ 1,099.00</p>
</div>
<div class="stordiv">
<p>256GB 6GB RAM</p>
<img class="amazonImg" src="https://i.imgur.com/ePXROoE.png" alt="">
<p class="price">$ 1,199.00</p>
</div>
<div class="stordiv">
<p>512GB 6GB RAM</p>
<img class="amazonImg" src="https://i.imgur.com/ePXROoE.png" alt="">
<p class="price">$ 1,399.00</p>
</div>

<div class="buttonstwo">
<button class="commentsButton" >BUY</button>
<button class="commentsButton" >SHOW ALL PRICES</button>
</div>

  </div>
</template>

<script>
export default {
name:'reviewPosts',
}
</script>

<style>
.reviewPosts{
    padding-left: 20px;
}
.commentsButton{
border: 1px;
background-color: #e62f2f;
color:rgb(235, 235, 235);
padding-left: 10px;
padding-right: 10px;
padding-bottom: 2px;
padding-top: 2px;
border-radius: 7px;
margin-left: 9px;
}
.headerText{
font-size: 20px;
color: rgb(48, 48, 48);
padding-bottom: 10px;
padding-top: 15px;
}
.reviewImage{
width: 95%;
padding-bottom: 10px;
padding-top: 15px;
}
.stars{
    padding-bottom: 50px;
}
.amazonImg{
    width: 80px;
    height: 16px;
    margin-left: 25px;
    margin-right: 30px;
    margin-top: 5px;
}
.price{
    color: rgb(209, 0, 0);
}
.buttonstwo{
    padding-top: 30px;
}

.stordiv{
    display: flex;
}
</style>