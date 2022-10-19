import { createApp } from 'vue'
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
// import lottieWebVueUmd from 'lottie-web-vue'
import App from './App.vue'
const app = createApp(App)
app.use(LottieAnimation)
app.directive('display', (el, binding) => {
    // console.log(binding.value);
    if (binding.value < 1.3) {
        // el.classList.add("svgAnimation")
        // el.style.opacity = 1
        // el.style.transition = 'all 1s'
        el.style.display = 'block'
        // el.style.visibility = 'visible'
    } else if (binding.value > 1) {
        // el.style.opacity = 0
        el.style.display = 'none'
        // el.style.visibility = 'hidden'
        // el.classList.remove("svgAnimation")
    } else if (binding.value === 0) {
        el.style.display = 'none'
    }
})
app.mount('#app')