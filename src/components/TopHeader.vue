<template>
  <nav class="top-navi">
    <div class="aa">
      <IconMenu />
    </div>

    <div class="logo">
      <img
        src="https://i.ibb.co/gRZ3gXh/WebNews.png"
        alt="WebNews"
        border="0"
      />
    </div>

    <div class="RightIcon">
      <IconBell class="ri1" />
      <IconLoupe class="ri2" />
      <IconDot class="ri3" />
    </div>
  </nav>
</template>

<script>
import IconBell from '@/icons/bell.svg'
import IconDot from '@/icons/dot.svg'
import IconLoupe from '@/icons/loupe.svg'
import IconMenu from '@/icons/menu.svg'

export default {
  name: 'app',
  components: {
    IconBell,
    IconDot,
    IconLoupe,
    IconMenu
  }
}
</script>

<style>
.top-navi {
  position: fixed;
  left: 0;
  right: 0;
  background-color: #e62f2f;
  display: flex;
  justify-content: space-between;
  width:100%;
}

.logo {
  width: 80px;
  margin-left: 45px;
}

.aa {
  display: flex;
  padding-left: 10px;
}

.RightIcon {
  display: flex;
}
.ri2 {
  margin-left: 15px;
  margin-right: 15px;
}
</style>
