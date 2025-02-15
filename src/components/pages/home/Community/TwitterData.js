import jasonImage from 'src/assets/images/home/tweeters/jason.png'
import tylerImage from 'src/assets/images/home/tweeters/tyler.png'
import philippImage from 'src/assets/images/home/tweeters/philipp.png'
import davidImage from 'src/assets/images/home/tweeters/david.png'
import papaImage from 'src/assets/images/home/tweeters/papa.png'
import twitterWhiteIcon from 'src/assets/images/home/tweeters/twitter-icon-white.svg'

export default [
  {
    image: tylerImage,
    name: 'Tyler Zey🔥',
    nameColor: '#000',
    username: '@TylerZey',
    usernameColor: '#8c8c8c',
    tweet:
      'Built two #Lambda functions today via @goserverless.  One runs daily to update all of our coupons in DynamoDB. And the other is the query function to search DynamoDB for the coupon.  Super duper easy with Serverless framework. Got it live and almost in prod already.',
    date: 'Feb 27th',
    link: 'https://twitter.com/TylerZey/status/1098691255226298371',
    bgColor: '#eaeaea',
    tweetColor: '#5b5b5b',
    dateColor: '#8c8c8c',
  },
  {
    image: jasonImage,
    name: 'Jason M',
    nameColor: '#000000',
    username: '@themccallister',
    usernameColor: '#8c8c8c',
    tweet:
      "I’m still a huge fan of @Docker but man this @goserverless stuff is purely amazing, I'm fully onboard with managing infrastructure from code... Just moved an existing API and supporting app to Lambda functions in one day...",
    tweetColor: '#5b5b5b',
    date: 'Feb 20th',
    link: 'https://twitter.com/themccallister/status/1098305655830663169',
    bgColor: '#eaeaea',
    dateColor: '#8c8c8c',
  },
  {
    image: papaImage,
    name: 'Pappa',
    nameColor: '#ffffff',
    username: '@DrPappa',
    usernameColor: '#8c8c8c',
    tweet:
      "I didn't realise #serverless was so absurdly quick and easy to use. Thanks @goserverless you've done an excellent job.",
    date: 'Mar 1st',
    link: 'https://twitter.com/DrPappa/status/1101377275868708864',
    bgColor: '#000',
    tweetColor: '#fff',
    dateColor: '#8c8c8c',
  },
  {
    image: davidImage,
    name: 'David Welch',
    nameColor: '#fff',
    username: '@david_welch',
    usernameColor: '#fff',
    tweet:
      'Built our platform on @goserverless with 2 engineers working nights and mornings for the first 14 months. Didn’t pay a dime until 16 months in, have scaled to 10+ employees w exp from 0 to senior, very agile w CI/CD, couldn’t have made a better choice',
    tweetColor: '#f7f7f7',
    date: 'Jul 24th',
    link: 'https://twitter.com/david_welch/status/1154042781251149824',
    bgColor: '#fd5750',
    dateColor: '#fff',
    customTwitterIcon: twitterWhiteIcon,
  },
]
