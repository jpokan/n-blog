import { gsap } from 'gsap'
import { CustomEase } from 'gsap/CustomEase'

if (process.client) {
  gsap.registerPlugin(CustomEase)
}
