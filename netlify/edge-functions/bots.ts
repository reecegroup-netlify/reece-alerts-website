// inspired (and taken) from ethan Netlify's blog post
// https://developers.netlify.com/guides/blocking-ai-bots-and-controlling-crawlers/

import { Config } from '@netlify/edge-functions'
import agents from '../../agents.json' with { type: 'json' }

const paths = [
  '/.aws',
  '/abc',
  '/actuator',
  '/admin',
  '/api',
  '/api/v1/database',
  '/assets/elFinder',
  '/autodiscover/autodiscover.json',
  '/aws.yml',
  '/carbon/admin',
  '/crx/de/index.jsp',
  '/debug-kit',
  '/docker-compose',
  '/cgi',
  '/configuration.php',
  '/eam',
  '/gespage',
  '/gradle',
  '/graphql',
  '/index.action',
  '/index.do',
  '/index.php',
  '/install',
  '/invoke',
  '/jira',
  '/login',
  '/menu/stapp',
  '/mod',
  '/nagios',
  '/ocp.php',
  '/rdPage.aspx',
  '/resin-doc',
  '/rest',
  '/server-status',
  '/site/vendor',
  '/smb.conf',
  '/startPage',
  '/system',
  '/telescope',
  '/vendor',
  '/WEB-INF',
  '/webjars',
  '/wls-wsat',
  '/wp-admin',
  '/wp-config',
  '/wp-content',
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

  console.log(`200: allow - ${userAgent}: ${url}`)

  // Otherwise, continue with the request as normal
  return
}

// This edge function is executed for all requests across the site
export const config: Config = {
  path: '/*',
}
