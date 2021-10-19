import '../styles/global.css'
import * as nextImage from 'next/image'


// Workaround Next.js Image external source
// hostname "source" is not configured under images in your `next.config.js
Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: props => <img {...props} />
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}