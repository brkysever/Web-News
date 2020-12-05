<template>
  <div class="post">
    
      <div>
        <img class="news-img" :src="postImage">
        </div>

          <div class="xx">
            <a class="text"> {{ postText }} </a>
                <br>
            <a class="date"> {{ postDate }} </a>
          </div>
        
  </div>
</template>

<script>
export default {
    name: 'Post',
    components: {},
    props:{
        postText:{
            type: String
        },
        postImage:{
            type: String
        },
        postDate:{
            type: String
        }
    }
}

</script>

<style>
.post {
  display: flex;
  flex-direction:row;
}

.news-img{  
   margin-left: 10px;
   width: 170px;
   height: 110px;
   border: 1px solid #000000;
   box-shadow: 1px 1px 5px grey;
   margin-top: 20px;
}

.xx{
   margin-left: 20px;
   width: 150px;
   
}
.date{
   color: grey;
   font-size: 10px;
}


</style>