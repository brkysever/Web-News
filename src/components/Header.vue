<template>
  <header class="header">
     
      <nav class="navi">
        <router-link to="/">
          <IconNews />
        </router-link>
        <router-link to="/REVIEWS">
          <IconReviews  />
        </router-link>
        <router-link to="/PHONES">
          <IconPhone />
        </router-link>
        <router-link to="/VIDEOS">
          <IconVideos />
        </router-link>
        <router-view/>
      </nav>
     
  </header>
</template>

<script>
import IconNews from '@/icons/news.svg'
import IconPhone from '@/icons/phone.svg'
import IconReviews from '@/icons/reviews.svg'
import IconVideos from '@/icons/videos.svg'



export default {
  name: 'MainHeader',
  components: {
    IconNews,
    IconPhone,
    IconReviews,
    IconVideos
  }
}
</script>

