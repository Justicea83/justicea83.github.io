const meta = {
  // Metadata
  siteTitle: 'Justice Arthur - Fullstack Developer',
  siteDescription:
    'Justice Arthur - Fullstack developer who loves modern web technologies.',
  siteTitleAlt: 'Justice Arthur',
  siteShortName: 'Justice Arthur',
  siteUrl: 'https://justicea83.github.io', // No trailing slash!
};

const social = {
  siteLogo: `src/static/logo.svg`,
  siteBanner: `${meta.siteUrl}/images/social-banner.png`,
  twitter: '@justicea83',
};

const website = {
  ...meta,
  ...social,
  disqusShortName: 'justicea83',
  googleAnalyticsID: 'UA-119972196-1',
  // Manifest
  themeColor: '#6D83F2',
  backgroundColor: '#6D83F2',
};

module.exports = website;
