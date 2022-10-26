<script setup>
  import { ScrollTrigger, ScrollToPlugin } from 'gsap/all'
  import gsap from 'gsap'
  import SplitType from 'split-type'
  import { onMounted } from 'vue'
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)


  const newsTicker = () => {
    gsap.to('.newsTicker', {
      xPercent: '-50',
      position: 'absolute',
      ease: 'none',
      duration: 30,
      repeat: -1
    })
    gsap.to('.newsTicker2', {
      xPercent: '50',
      position: 'absolute',
      ease: 'none',
      duration: 30,
      repeat: -1
    })
    const text = new SplitType('.splitText', { types: 'words, chars' })
    gsap.from(text.chars, {
      opacity: 0,
      y: 100,
      ease: 'expo',
      duration: 1.5,
      delay: 0.3,
      stagger: { amount: 0.1 }
    })
    gsap.to('.showImgCurtain', {
      yPercent: '100',
      duration: 1,
      ease: 'expo',
      delay: .7
    })
  }

  const scaleAnimation = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.scaleContainer',
        start: 'top center',
        end: '+=3000px',
        pin: true,
        scrub: true
      }
    })
    tl.to('.scaleCircle', {
      scale: '50',
      duration: 1
    })
    .to('.scaleText', {
      opacity: '0',
      duration: 1
    }, '<')
    .to('.scaleCircle', {
      display: 'none'
    })
    .to('.bodyBg', {
      className: 'bg-gradient-to-l from-#9C3540 to-#50648E'
    }, '<')
  }

  const fadeAnimation = () => {
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.fadeContainer',
        start: 'top center',
        end: '+=5000px',
        pin: true,
        scrub: true
      }
    })
    tl2.to('.fadeText1', {
      opacity: '1',
      duration: 1
    })
    .to('.fadeText1', {
      y: '-100px',
      opacity: 0,
      duration: 1
    })
    .to('.fadeText2 ', {
      opacity: 1,
      duration: 1
    })
    .to('.fadeText2', {
      y: '-100px',
      opacity: 0,
      duration: 1
    })
    .to('.fadeText3 ', {
      opacity: 1,
      duration: 1
    })
  }

  const fadeImgAnimation = () => {
    gsap.utils.toArray('.fadeImg').forEach((item) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top center',
          end: 'bottom top',
          toggleActions: 'play none none none'
        }
      })
      tl.to(item, {
        ease: 'expo',
        y: '-300px',
        opacity: '1',
        duration: 1.5
      })
    })
  }

  onMounted(() => {
    newsTicker()
    scaleAnimation()
    fadeAnimation()
    setTimeout(() => {
      fadeImgAnimation()
    }, 500)
  })
</script>

<template>
  <div class="bodyBg bg-black overflow-hidden">
    <!-- 第一區塊 -->
    <div class="w-full min-h-screen relative overflow-hidden">
      <!-- 上下跑馬燈 -->
      <ul class="newsTicker whitespace-nowrap text-transparent text-stroke-1px text-stroke-white text-80px">
        <li>
          <span class="inline-block"> GOOD MORNING GOOD MORNING GOOD MORNING GOOD MORNING </span>
          <span class="inline-block"> GOOD MORNING GOOD MORNING GOOD MORNING GOOD MORNING </span>
          <span class="inline-block"> GOOD MORNING GOOD MORNING GOOD MORNING GOOD MORNING </span>
          <span class="inline-block"> GOOD MORNING GOOD MORNING GOOD MORNING GOOD MORNING </span>
          <span class="inline-block"> GOOD MORNING GOOD MORNING GOOD MORNING GOOD MORNING </span>
          <span class="inline-block"> GOOD MORNING GOOD MORNING GOOD MORNING GOOD MORNING </span>
        </li>
      </ul>
      <ul class="absolute bottom-0 -right-0% newsTicker2 whitespace-nowrap text-transparent text-stroke-1px text-stroke-white text-80px">
        <li>
          <span class="inline-block"> GOOD MORNING GOOD MORNING GOOD MORNING GOOD MORNING </span>
          <span class="inline-block"> GOOD MORNING GOOD MORNING GOOD MORNING GOOD MORNING </span>
          <span class="inline-block"> GOOD MORNING GOOD MORNING GOOD MORNING GOOD MORNING </span>
          <span class="inline-block"> GOOD MORNING GOOD MORNING GOOD MORNING GOOD MORNING </span>
          <span class="inline-block"> GOOD MORNING GOOD MORNING GOOD MORNING GOOD MORNING </span>
          <span class="inline-block"> GOOD MORNING GOOD MORNING GOOD MORNING GOOD MORNING </span>
        </li>
      </ul>

      <!-- 左文右圖 -->
      <div class="absolute top-1/2 -translate-y-1/2 left-0 w-full text-white text-100px px-5%">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-50px items-center">
          <div class="col-span-1">
            <h2 class="font-bold splitText overflow-hidden">AR T</h2>
            <p class="text-30px lh-40px splitText overflow-hidden">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex numquam assumenda sed eligendi odio eveniet culpa voluptas dolorem doloremque. Ratione.</p>
          </div>
          <div class="col-span-1 flex items-center justify-center">
            <div class="relative w-300px h-0 pb-[calc(100%/4*3)] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1501472312651-726afe119ff1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="absolute top-0 left-0 w-full h-full">
              <div class="absolute w-full h-full top-0 left-0 bg-black showImgCurtain"></div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <!-- 第二區塊 -->
    <div class="w-full relative scaleContainer">
      <div class="scaleCircle w-60px h-60px rounded-full bg-gradient-to-l from-#C30500 to-#017AB6 absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center text-white">
        <p class="scaleText">Go</p>
      </div>
    </div>

    <!-- 第三區塊 -->
    <div class="w-full relative fadeContainer">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fadeText1 opacity-0">
        <p class="text-32px md:text-100px font-bold text-white tracking-20px text-center">GSAP</p>
      </div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fadeText2 opacity-0">
        <p class="text-32px md:text-100px font-bold text-white tracking-20px text-center">IS</p>
      </div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fadeText3 opacity-0">
        <p class="text-32px md:text-100px font-bold text-white tracking-20px text-center">AWESOME</p>
      </div>
    </div>

    <!-- 第四區塊 -->
    <div class=" min-h-screen bg-black mt-300px px-[5%] overflow-x-hidden mx-auto pt-300px">
      <div class="columns-3 md:columns-5 gap-50px">
        <img src="https://images.unsplash.com/photo-1501472393568-6d98729ac121?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="w-full mt-50px fadeImg opacity-0">
        <img src="https://images.unsplash.com/photo-1559913929-08b6989ec45e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="w-full mt-50px fadeImg opacity-0">
        <img src="https://images.unsplash.com/photo-1556699894-acf2cb482574?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=652&q=80" class="w-full mt-50px fadeImg opacity-0">
        <img src="https://images.unsplash.com/photo-1566592802312-4fb1d22b3d60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80" class="w-full mt-50px fadeImg opacity-0">
        <img src="https://images.unsplash.com/photo-1501472312651-726afe119ff1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="w-full mt-50px fadeImg opacity-0">
        <img src="https://images.unsplash.com/photo-1501472266257-6fbdb19654ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="w-full mt-50px fadeImg opacity-0">
        <img src="https://images.unsplash.com/photo-1501472393568-6d98729ac121?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="w-full mt-50px fadeImg opacity-0">
        <img src="https://images.unsplash.com/photo-1559913929-08b6989ec45e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="w-full mt-50px fadeImg opacity-0">
        <img src="https://images.unsplash.com/photo-1556699894-acf2cb482574?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=652&q=80" class="w-full mt-50px fadeImg opacity-0">
        <img src="https://images.unsplash.com/photo-1566592802312-4fb1d22b3d60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80" class="w-full mt-50px fadeImg opacity-0">
        <img src="https://images.unsplash.com/photo-1501472312651-726afe119ff1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="w-full mt-50px fadeImg opacity-0">
        <img src="https://images.unsplash.com/photo-1501472266257-6fbdb19654ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="w-full mt-50px fadeImg opacity-0">
        <img src="https://images.unsplash.com/photo-1501472393568-6d98729ac121?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="w-full mt-50px fadeImg opacity-0">
        <img src="https://images.unsplash.com/photo-1559913929-08b6989ec45e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="w-full mt-50px fadeImg opacity-0">
        <img src="https://images.unsplash.com/photo-1556699894-acf2cb482574?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=652&q=80" class="w-full mt-50px fadeImg opacity-0">
        <img src="https://images.unsplash.com/photo-1566592802312-4fb1d22b3d60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80" class="w-full mt-50px fadeImg opacity-0">
        <img src="https://images.unsplash.com/photo-1501472312651-726afe119ff1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="w-full mt-50px fadeImg opacity-0">
        <img src="https://images.unsplash.com/photo-1501472266257-6fbdb19654ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="w-full mt-50px fadeImg opacity-0">
        <img src="https://images.unsplash.com/photo-1501472393568-6d98729ac121?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="w-full mt-50px fadeImg opacity-0">
        <img src="https://images.unsplash.com/photo-1559913929-08b6989ec45e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="w-full mt-50px fadeImg opacity-0">
        <img src="https://images.unsplash.com/photo-1556699894-acf2cb482574?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=652&q=80" class="w-full mt-50px fadeImg opacity-0">
        <img src="https://images.unsplash.com/photo-1566592802312-4fb1d22b3d60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80" class="w-full mt-50px fadeImg opacity-0">
        <img src="https://images.unsplash.com/photo-1501472312651-726afe119ff1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="w-full mt-50px fadeImg opacity-0">
        <img src="https://images.unsplash.com/photo-1501472266257-6fbdb19654ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="w-full mt-50px fadeImg opacity-0">
      </div>
    </div>
  </div>
</template>
