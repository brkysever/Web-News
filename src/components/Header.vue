<template>
  <header class="header">
    <nav class="navi">
      <router-link   to="/">
        <IconNewsFill v-if="$route.name === 'NEWS'" />
        <IconNews v-else />
      </router-link>
      <router-link  to="/REVIEWS">
        <IconReviewsFill v-if="$route.name === 'REVIEWS'" />
        <IconReviews v-else />
      </router-link>
      <router-link  to="/PHONES">
        <IconPhoneFill v-if="$route.name === 'PHONES'" />
        <IconPhone v-else />
      </router-link>
      <router-link  to="/VIDEOS">
        <IconVideosFill v-if="$route.name === 'VIDEOS'" />
        <IconVideos v-else />
      </router-link>
    </nav>
  </header>
</template>

<script>
import IconNews from '@/icons/news.svg'
import IconNewsFill from '@/icons/news-fill.svg'
import IconPhone from '@/icons/phone.svg'
import IconPhoneFill from '@/icons/phone-fill.svg'
import IconReviews from '@/icons/reviews.svg'
import IconReviewsFill from '@/icons/reviews-fill.svg'
import IconVideos from '@/icons/videos.svg'
import IconVideosFill from '@/icons/videos-fill.svg'

export default {
  name: 'MainHeader',
  components: {
    IconNews,
    IconNewsFill,
    IconPhone,
    IconPhoneFill,
    IconReviews,
    IconReviewsFill,
    IconVideos,
    IconVideosFill
  }
}
</script>

<style>

.navi {
  padding-left: 30px;
  z-index: 100;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #e62f2f;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
