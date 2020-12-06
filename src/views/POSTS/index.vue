<template>
<div class="newsPost">  
<div>
    <button class="commentsButton">COMMENTS (6)</button>
    <button class="yourCommentButton">POST YOUR COMMENT</button>
</div>

<div>

<h1 class="headerText">Oppo Reno 5 with Snapdragon 765G and
Dimensity 1000+ found on Geekbench
</h1>

<p class="date">ALEX, 2 NOVEMBER 2019</p>

<img class="postImage" src="https://i.imgur.com/8Xww2J0.jpg">

<p class="postText">Lorem ipsum dolor sit amet, consetetur sadipscing
elitr, sed diam nonumy eirmod tempor invidunt ut
labore et dolore magna aliquyam erat, sed diam
voluptua. At vero eos et accusam et justo duo
dolores et ea rebum. Stet clita kasd gubergren, no
sea takimata sanctus est Lorem ipsum dolor sit
amet. Lorem ipsum dolor sit amet, consetetur
sadipscing elitr, sed diam nonumy eirmod tempor
invidunt ut labore et dolore magna aliquyam erat,
sed diam voluptua. At vero eos et accusam et justo
duo dolores et ea rebum. Stet clita kasd gubergren,
no sea takimata sanctus est Lorem ipsum dolor sit
amet.
Lorem ipsum dolor sit amet, consetetur sadipscing
elitr, sed diam nonumy eirmod tempor invidunt ut
labore et dolore magna aliquyam erat, sed diam
voluptua. At vero eos et accusam et justo duo
dolores et ea rebum. Stet clita kasd gubergren, no
sea takimata sanctus est Lorem ipsum dolor sit
amet. Lorem ipsum dolor sit amet, consetetur
sadipscing elitr, sed diam nonumy eirmod tempor
invidunt ut labore et dolore magna aliquyam erat,
sed diam voluptua. At vero eos et accusam et justo
duo dolores et ea rebum.</p>

</div>

<div class="socialButton">
    <a class="facebookButton" href=https://www.facebook.com/>FACEBOOK</a>
    <a class="twitterButton" href="https://www.twitter.com">TWITTER</a>
</div>

</div>
</template>

<script>
export default {
name: 'POSTS',

}
</script>

<style>
.newsPost{
    padding-left: 20px;
}
.commentsButton, .yourCommentButton{
border: 1px;
background-color: #e62f2f;
color:rgb(235, 235, 235);
padding-left: 10px;
padding-right: 10px;
padding-bottom: 2px;
padding-top: 2;
border-radius: 7px;
margin-left: 9px;
}
.headerText{
font-size: 20px;
color: rgb(48, 48, 48);
padding-bottom: 10px;
}
.postImage{
width: 338px;
padding-bottom: 35px;
padding-top: 15px;
}
.postText{
color: rgb(70, 70, 70);
text-indent: 5px;
line-height: 23px;
}
.facebookButton{
border: 1px;
background-color: #4867aa;
color:rgb(255, 255, 255);
padding-left: 10px;
padding-right: 10px;
padding-bottom: 2px;
padding-top: 2;
border-radius: 7px;
margin-left: 9px;
}
.twitterButton{
border: 1px;
background-color: #1da1f2;
color:rgb(255, 255, 255);
padding-left: 10px;
padding-right: 10px;
padding-bottom: 2px;
padding-top: 2;
border-radius: 7px;
margin-left: 9px;
}

.socialButton{
    padding: 10px;
}
</style>