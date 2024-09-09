// inspired (and taken) from ethan Netlify's blog post
// https://developers.netlify.com/guides/blocking-ai-bots-and-controlling-crawlers/

import { Config } from '@netlify/edge-functions'
import agents from '../../agents.json' with { type: 'json' }

const paths = [
  '/index.php',
  '/wp-admin/admin-ajax.php',
  '/login',
  '/invoke/sample.xslt/transformToString',
  '/wls-wsat/CoordinatorPortType11',
  '/api',
  '/login.action',
  '/api/v1/database/1',
  '/admin',
  '/eam/vib',
  '/graphql',
  '/abc/..CFIDE/wizards/common/utils.cfc',
  '/carbon/admin/login.jsp',
  '/autodiscover/autodiscover.json',
  '/index.action',
]

export default async (request: Request) => {
  const { url, headers } = request

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
    console.log(`requester uses a bot path [${isBotPath}], disallow with 401`)
    return new Response(null, { status: 401 })
  }

  // Get the user agent string of the requester
  const userAgent = headers.get('user-agent')

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
    console.log(`requester is a bot agent [${isBotAgent}], disallow with 401`)
    return new Response(null, { status: 401 })
  }

  // Otherwise, continue with the request as normal
  return
}

// This edge function is executed for all requests across the site
export const config: Config = {
  path: '/*',
}
