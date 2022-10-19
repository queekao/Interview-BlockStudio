import { createApp } from 'vue'
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
// import lottieWebVueUmd from 'lottie-web-vue'
import App from './App.vue'
const app = createApp(App)
app.use(LottieAnimation)
app.directive('display', (el, binding) => {
    console.log(binding.value);
    // let executed = false
    if (binding.value < 0.8 && binding.value > 0) {
        // el.classList.add("svgAnimation")
        // el.style.opacity = 1
        // el.style.transition = 'all 1s'
        el.style.display = 'block'
        // executed = true
        el.style.visibility = 'visible'
    } else if (binding.value > 0.8) {
        // el.style.opacity = 0
        el.style.display = 'none'
        // el.style.visibility = 'hidden'
        // el.classList.remove("svgAnimation")
    } else if (binding.value === 0) {
        el.style.display = 'block'
        el.style.visibility = 'hidden'
        // return
    } else if (binding.value === -10) {
        el.style.visibility = 'visible'
        // return
    }
})
app.mount('#app')