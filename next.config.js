/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ddragon.leagueoflegends.com', 'raw.communitydragon.org']
  },
  env: {
    regions: ['na1', 'euw', 'eun1', 'kr', 'jp', 'br', 'la1', 'la2', 'oc1', 'ru', 'tr1'],
    regionsDisplayValues: {
      'na1': 'NA',
      'euw': 'EUW',
      'eun1': 'EUNE',
      'kr': 'KR',
      'jp': 'JP',
      'br': 'BR',
      'la1': 'LAN',
      'la2': 'LAS',
      'oc1': 'OCE',
      'ru': 'RU',
      'tr1': 'TR'
    },
  }
}

module.exports = nextConfig
