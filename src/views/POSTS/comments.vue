<template>
  <div class="comments">
    <div class="firstBox">
      <h1 class="commentHeader">
        Oppo Reno 5 with Snapdragon 765G and Dimensity 1000+ found on Geekbench
      </h1>
      <p class="date">2 NOVEMBER 2019</p>
      <p class="altText">
        The Oppo Reno 5 will come with up to three different chipsets.
      </p>
    </div>

    <div class="secondBox">
      <p class="userName">Alex Cobal</p>

      <div class="userTextBox">
        <p class="userText">4300 mah battery. Lol cant wait.</p>
      </div>
      <p class="answer">I think its 4300 mah</p>

      <p class="userTextDate">Bruh,18 hours ago</p>

    </div>
     <div class="secondBox">
      <p class="userName">Alex Cobal</p>

      <div class="userTextBox">
        <p class="userText">4300 mah battery. Lol cant wait.</p>
      </div>
      <p class="answer">I think its 4300 mah</p>

      <p class="userTextDate">Bruh,18 hours ago</p>

    </div>
     <div class="secondBox">
      <p class="userName">Alex Cobal</p>

      <div class="userTextBox">
        <p class="userText">4300 mah battery. Lol cant wait.</p>
      </div>
      <p class="answer">I think its 4300 mah</p>

      <p class="userTextDate">Bruh,18 hours ago</p>

    </div>
     <div class="secondBox">
      <p class="userName">Alex Cobal</p>

      <div class="userTextBox">
        <p class="userText">4300 mah battery. Lol cant wait.</p>
      </div>
      <p class="answer">I think its 4300 mah</p>

      <p class="userTextDate">Bruh,18 hours ago</p>

    </div>
     <div class="secondBox">
      <p class="userName">Alex Cobal</p>

      <div class="userTextBox">
        <p class="userText">4300 mah battery. Lol cant wait.</p>
      </div>
      <p class="answer">I think its 4300 mah</p>

      <p class="userTextDate">Bruh,18 hours ago</p>

    </div>
     <div class="secondBox">
      <p class="userName">Alex Cobal</p>

      <div class="userTextBox">
        <p class="userText">4300 mah battery. Lol cant wait.</p>
      </div>
      <p class="answer">I think its 4300 mah</p>

      <p class="userTextDate">Bruh,18 hours ago</p>

    </div>
  </div>
</template>

<script>
export default {
  name: 'comments'
}
</script>

<style>
.comments {
  display: flex;
  flex-direction: column;
}
.firstBox {
  border: 1px solid #b3b3b3;
  box-shadow: 1px 1px 5px grey;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  margin-top: -20px;
}
.commentHeader {
  font-size: 23px;
  padding-bottom: 10px;
  color: rgb(228, 0, 0);
}
.altText {
  padding-top: 10px;
  font-size: 14px;
}
.secondBox {
    padding-top: 50px;
    border: 2px solid  #b3b3b3;
    box-shadow: 1px 1px 5px grey;
}
.userName{
    padding-left: 30px;
    color: rgb(134, 134, 134);
    padding-bottom: 20px;
}
.userTextBox{
    background-color: rgb(233, 233, 233);
    padding-left: 30px;
    width: 370px;
    height: 30px;
    padding-top: 5px;
}
.userText{
    color: rgb(138, 138, 138);
}
.answer{
     padding-left: 30px;
     padding-top: 15px;
      color: rgb(109, 109, 109);
}

.userTextDate{
    color: grey;
    font-size: 10px;
    padding-left: 30px;
    padding-top: 15px;
    padding-bottom: 10px;
}
</style>
