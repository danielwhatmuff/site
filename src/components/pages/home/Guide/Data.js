import learnImage from 'src/assets/images/home/learn-graphic.svg'
import tryImage from 'src/assets/images/home/try-graphic.svg'
import accelerateImage from 'src/assets/images/home/accelerate-graphic.svg'
import {
  framework,
  examples,
  why,
  contactForm,
  enterprise,
} from 'src/constants/newUrls'

export default [
  {
    metaTitle: 'Try',
    image: tryImage,
    title: 'Deploy a serverless use-case in seconds',
    content:
      'This next-generation cloud architecture auto-scales and charges you only when it runs. No better options exists for building fast and innovating more.',
    actions: [
      { text: 'get started free', link: framework },
      { text: 'view examples', link: examples },
    ],
  },
  {
    metaTitle: 'Learn',
    image: learnImage,
    title: 'The unprecedented power of the Serverless architecture',
    content:
      'The Serverless CLI lets you get an app deployed to the cloud platform of choice in seconds rather than days. There’s no quicker way to get a POC up and running.',
    actions: [
      { text: 'why serverless?', link: why },
      { text: 'learn more', link: framework },
    ],
  },
  {
    metaTitle: 'Accelerate',
    image: accelerateImage,
    title: 'Empower and enable teams to move fast safely',
    content:
      'Let us help you accelerate Serverless adoption the right way with training, support, and standardized tooling.',
    actions: [
      { text: 'enterprise support', link: enterprise },
      { text: 'contact us', link: contactForm },
    ],
  },
]
