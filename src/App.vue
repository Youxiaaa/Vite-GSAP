<script setup>
  import { ScrollTrigger, ScrollToPlugin } from 'gsap/all'
  import gsap from 'gsap'

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  // 跑馬燈
  const gsapAnimation = () => {
    gsap.to('.showText', {
      xPercent: '-50',
      ease: 'none',
      duration: 10,
      repeat: -1
    })
    gsap.to('.showText2', {
      xPercent: '50',
      ease: 'none',
      duration: 10,
      repeat: -1,
      position: 'absolute'
    })
  }

  onMounted(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.box',
        start: 'top top',
        end: 'bottom -50%',
        scrub: true
      }
    })
    tl.to('.box', {
      top: '0%',
      left: '100%',
      xPercent: '-100',
      duration: 10,
      position: 'absolute'
    }).to('.box', {
      top: '50%',
      duration: 20,
      position: 'absolute'
    }).to('.box', {
      left: '50%',
      xPercent: '-50',
      duration: 30,
      position: 'absolute'
    }).to('.box', {
      top: '100%',
      yPercent: '-100',
      duration: 40,
      position: 'absolute'
    })

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.imgContainer',
        start: 'top top',
        // end: 'bottom -30%',
        pin: true,
        scrub: true
      }
    })
    tl2.to('.img1', {
      xPercent: '-100'
    }).to('.img2', {
      xPercent: '-100'
    })
    gsapAnimation()
  })
</script>

<template>
  <div>
    <div class="min-h-300vh bg-black overflow-x-hidden">
      <h2 class="showText whitespace-nowrap text-100px text-stroke-1px text-stroke-white text-transparent font-bold inline-block">Travel Travel Travel Travel Travel Travel Travel Travel Travel Travel Travel Travel Travel Travel Travel</h2>
      <div class="relative w-full min-h-[calc(100vh-100px)]">
        <div class="box w-100px h-100px border-4px border-black">
          <img src="https://cdn-icons-png.flaticon.com/512/706/706195.png" alt="" class="w-full h-full object-cover">
        </div>
      </div>
      <div class="relative">
        <h2 class="showText2 whitespace-nowrap -right-0 bottom-0 flex-none text-100px text-stroke-1px text-stroke-white text-transparent font-bold inline-block">Travel Travel Travel Travel Travel Travel Travel Travel Travel Travel Travel Travel Travel Travel Travel</h2>
      </div>
      <div class="relative w-full min-h-screen imgContainer overflow-hidden">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80" class="img1 w-full h-full absolute top-0 left-0 object-cover z-20">
        <img src="https://images.unsplash.com/photo-1604537466573-5e94508fd243?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80" class="img2 w-full h-full absolute top-0 left-0 object-cover z-10">
        <img src="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" class="img3 w-full h-full absolute top-0 left-0 object-cover z-0">
      </div>
      <div class="bg-white w-full min-h-screen"></div>
    </div>
  </div>
</template>
