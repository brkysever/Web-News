<template>
  <div class="news">
     <h1 class="mainText">News</h1>
   <Post
   v-for="post of postData"
   :key="post.mediaID"
   :postImage="post.postImage"
   :postText="post.postText"
   :postDate="post.postDate"
   />

  </div>
</template>

<script>
import Post from '@/components/Post'


const RESPONSE = [
  {
    postText: 'The Poco M3 is rumored to launch in Europe at around €150, will have a 48 MP camera.',
    postDate: '1 hours ago.',
    postImage:'https://i.imgur.com/8Xww2J0.jpg'
  },
    {
    postText: 'Redmi K30 5G starts receiving Android 11-based MIUI 12.',
    postDate: '2 hours ago.',
    postImage:'https://i.imgur.com/WolwIwz.jpg'
  },
    {
    postText: 'Oppo is holding off on building rollable phones commercially.',
    postDate: '3 hours ago.',
    postImage:'https://i.imgur.com/CPHS34r.jpg'
  },
    {
    postText: 'Report: the Huawei P50 will use Kirin 9000 chips, Samsung and LG OLED displays.',
    postDate: '4 hours ago.',
    postImage:'https://i.imgur.com/mA4NYAK.jpg'
  },
    {
    postText: 'The Poco M3 is rumored to launch in Europe at around €150, will have a 48 MP camera.',
    postDate: '9 hours ago.',
    postImage:'https://i.imgur.com/uN8qi9K.jpg'
  },
  {
    postText: 'Oppo is holding off on building rollable phones commercially.',
    postDate: '3 hours ago.',
    postImage:'https://i.imgur.com/CPHS34r.jpg'
  },

]


export default {
  name: 'News',
  components: {
     Post
  },

data() {
    return {
      postData: []
    }
  },
  async created() {
    this.postData = RESPONSE
  }
}
</script>

<style>
.mainText{
  font-size: 17px;
  color: rgb(235, 0, 0);
  padding-left: 15px;
}

</style>

