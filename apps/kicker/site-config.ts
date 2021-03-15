const siteConfig = {
  title: 'Kicker',
  description: 'Kicker app',
  url: process.env.NEXT_PUBLIC_BASE_URL,
  twitterUsername: process.env.TWITTER_USERNAME,
  email: process.env.EMAIL_ADDRESS,
  socials: {
    GitHub: `https://github.com/${process.env.GITHUB_USERNAME}`,
    Twitter: `https://twitter.com/${process.env.TWITTER_USERNAME}`,
  },
  themeColor: '#000000',
  backgroundColor: '#FFFFFF',
}

export default siteConfig
