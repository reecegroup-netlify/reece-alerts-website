// inspired (and taken) from ethan Netlify's blog post
// https://developers.netlify.com/guides/blocking-ai-bots-and-controlling-crawlers/

import { Config } from '@netlify/edge-functions'
import agents from '../../agents.json' with { type: 'json' }

const paths = [
  '/.aws',
  '/.hg',
  '/.wp-config',
  '/?cpn',
  '/?ID',
  '/_debug',
  '/abc',
  '/actuator',
  '/admin',
  '/apache.',
  '/api',
  '/applications.',
  '/assets/elFinder',
  '/autodiscover',
  '/aws.yml',
  '/awstats',
  '/bin',
  '/bitrix',
  '/carbon',
  '/ccm-web',
  '/cgi',
  '/common',
  '/configuration',
  '/crx',
  '/db-password',
  '/debug-kit',
  '/docker-compose',
  '/druid',
  '/eam',
  '/etc',
  '/faces',
  '/geoserver',
  '/gespage',
  '/gradle',
  '/graphql',
  '/gsearch.',
  '/iframely',
  '/index.action',
  '/index.do',
  '/index.php',
  '/install',
  '/invoke',
  '/jira',
  '/js',
  '/LetsEncrypt',
  '/libs',
  '/local.xml',
  '/log',
  '/login',
  '/logs',
  '/LWA',
  '/manage',
  '/menu/stapp',
  '/mgmt',
  '/mod',
  '/my.',
  '/nagios',
  '/oauth',
  '/ocp.',
  '/openam',
  '/passwd',
  '/perl-status',
  '/phpexcel',
  '/phppgadmin',
  '/probe',
  '/profile',
  '/PSEMHUB',
  '/q?',
  '/railsapp',
  '/rdPage.',
  '/resin-doc',
  '/rest',
  '/rsync.',
  '/searchblox',
  '/servlet',
  '/server-status',
  '/setup.',
  '/site/vendor',
  '/smb.conf',
  '/startPage',
  '/swaggerui',
  '/sync.sh',
  '/system',
  '/telescope',
  '/test',
  '/ui',
  '/upload.action',
  '/unsafe',
  '/v1.',
  '/vendor',
  '/web',
  '/WEB-INF',
  '/webjars',
  '/wls-wsat',
  '/wp-admin',
  '/wp-config',
  '/wp-content',
  '/yarn.',
  '/zabbix'
]

export default async (request: Request) => {
  const { url, headers } = request

  // Get the user agent string of the requester
  const userAgent = headers.get('user-agent')

  // Check against our list of known AI bots
  let isBotPath = ''
  paths.forEach((path) => {
    if (url.toLowerCase().includes(path.toLowerCase())) {
      isBotPath = path
      return
    }
  })

  // If the request is a known bot path, disallow with a 401
  if (isBotPath !== '') {
    console.log(`401 disallow - bot path [${isBotPath}]: ${url} request ${userAgent}`)
    return new Response(null, { status: 401 })
  }

  // Check against our list of known bot agent
  let isBotAgent = ''
  agents.forEach((agent) => {
    if (userAgent && userAgent.toLowerCase().includes(agent.toLowerCase())) {
      isBotAgent = agent
      return
    }
  })

  // If the requester is an bot agent, disallow with a 401
  if (isBotAgent !== '') {
    console.log(`401 disallow - user-agent [${isBotAgent}]: ${url} | ${userAgent}` )
    return new Response(null, { status: 401 })
  }

  console.log(`200: allow - ${url}: ${userAgent}`)

  // Otherwise, continue with the request as normal
  return
}

// This edge function is executed for all requests across the site
export const config: Config = {
  path: '/*',
}