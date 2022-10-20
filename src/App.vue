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
        trigger: '.boxContainer',
        start: 'top top',
        // 增加滾動長度
        // end: '+=1000px',
        end: 'bottom center',
        // pin: true,
        scrub: true
      }
    })
    tl.to('.box', {
      top: '40%',
      left: '51%',
      xPercent: '-100',
      duration: 1,
      position: 'absolute'
    }).to('.box2', {
      top: '100%',
      left: '50%',
      duration: 1,
      rotate: '90',
      xPercent: '-50',
      position: 'absolute'
    }).to('.box', {
      top: '90%',
      // left: '51%',
      // xPercent: '-100',
      left: '52%',
      rotate: '125',
      duration: 1,
      position: 'absolute'
    }, '<')

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.imgContainer',
        start: 'top top',
        end: '+=3000px',
        pin: true,
        scrub: true
      }
    })
    tl2.to('.img1', {
      xPercent: '-100'
    }).to('.img2', {
      xPercent: '100'
    })

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.scaleContainer',
        start: 'top top',
        end: '+=3000px',
        pin: true,
        scrub: true
      }
    })
    tl3.to('.scaleImg', {
      width: '500px'
    })

    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: '.scaleContainer2',
        start: 'top 35%',
        end: 'bottom 90%',
        markers: true,
        toggleActions: 'play reset reset none'
      }
    })
    tl4.to('.scaleImg2', {
      duration: 1.5,
      ease: 'expo',
      scale: '1'
    })
    gsapAnimation()
  })
</script>

<template>
  <div>
    <div class="min-h-300vh bg-black overflow-x-hidden">
      <h2 class="showText whitespace-nowrap text-100px text-stroke-1px text-stroke-white text-transparent font-bold inline-block">Japan Japan Japan Japan Japan Japan Japan Japan Japan Japan Japan Japan Japan Japan Japan</h2>
      <div class="relative w-full min-h-[calc(100vh-100px)] boxContainer">
        <div class="box absolute w-100px h-100px top-40% -translate-y-50% rotate-46">
          <img src="https://cdn-icons-png.flaticon.com/512/4334/4334098.png" alt="" class="w-100px object-cover">
        </div>
        <div class="box2 absolute w-100px h-100px top-40% left-50% -translate-y-50%">
          <img src="https://cdn-icons-png.flaticon.com/512/415/415682.png" alt="" class="w-100px object-cover">
        </div>
      </div>
      <div class="relative">
        <h2 class="showText2 whitespace-nowrap -right-0 bottom-0 flex-none text-100px text-stroke-1px text-stroke-white text-transparent font-bold inline-block">Japan Japan Japan Japan Japan Japan Japan Japan Japan Japan Japan Japan Japan Japan Japan</h2>
      </div>
      <div class="relative w-full min-h-screen imgContainer overflow-hidden">
        <img src="https://images.unsplash.com/photo-1596332996407-d8d5d3b60e8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" class="img1 w-full h-full absolute top-0 left-0 object-cover object-bottom z-20">
        <img src="https://images.unsplash.com/photo-1526298386254-516d688c9e2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1726&q=80" class="img2 w-full h-full absolute top-0 left-0 object-cover object-bottom z-10">
        <img src="https://images.unsplash.com/photo-1509023464722-18d996393ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" class="img3 w-full h-full absolute top-0 left-0 object-cover z-0">
      </div>
      <div class="bg-white w-full min-h-screen flex items-center justify-center scaleContainer">
        <img src="https://images.unsplash.com/photo-1601823984263-b87b59798b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" class="scaleImg w-200px object-contain">
      </div>
      <div class="bg-black w-full min-h-screen flex items-center justify-center scaleContainer2">
        <img src="https://images.unsplash.com/photo-1605523746900-8aa30db1befd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" class="scaleImg2 w-500px object-contain scale-0">
      </div>
    </div>
  </div>
</template>
