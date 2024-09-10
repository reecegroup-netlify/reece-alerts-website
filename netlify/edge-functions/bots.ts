// inspired (and taken) from ethan Netlify's blog post
// https://developers.netlify.com/guides/blocking-ai-bots-and-controlling-crawlers/

import { Config } from '@netlify/edge-functions'
import agents from '../../agents.json' with { type: 'json' }

const paths = [
  '/.aws/credentials',
  '/abc/..CFIDE/wizards/common/utils.cfc',
  '/actuator',
  '/admin',
  '/api',
  '/api/v1/database/1',
  '/assets/elFinder-2.1.9/elfinder.html',
  '/autodiscover/autodiscover.json',
  '/aws.yml',
  '/carbon/admin/login.jsp',
  '/crx/de/index.jsp',
  '/debug-kit/404',
  '/docker-compose.prod.yml',
  '/cgi/get_param.cgi?sys.passwd=&sys.su.name=&xml=',
  '/configuration.php.old',
  '/eam/vib',
  '/gespage/doDownloadData?file_name=..%2F..%2F..%2F..%2F..%2FWindows%2Fdebug%2FNetSetup.log',
  '/gradle/libs.versions.toml',
  '/graphql',
  '/index.action',
  '/index.do',
  '/index.php',
  '/install',
  '/invoke/sample.xslt/transformToString',
  '/jira/secure/QueryComponentRendererValue!Default.jspa?assignee=user%3Aadmin',
  '/login',
  '/login.action',
  '/menu/stapp',
  '/mod/lti/auth.php',
  '/nagios/cgi-bin/status.cgi',
  '/ocp.php?ALL=1',
  '/rdPage.aspx',
  '/resin-doc/viewfile',
  '/rest/all/V1/guest-carts/test-id/estimate-shipping-methods',
  '/server-status',
  '/site/vendor/phpunit/phpunit/src/Util/PHP/eval-stdin.php',
  '/smb.conf',
  '/startPage',
  '/system/manage',
  '/telescope/requests',
  '/vendor/phpfastcache/phpfastcache/docs/examples/phpinfo.php',
  '/WEB-INF/web.xml',
  '/webjars',
  '/webjars/swagger-ui/3.51.2/index.html',
  '/webjars/swagger-ui/2.1.0-M1/index.html',
  '/webjars/swagger-ui/2.0.18/index.html',
  '/wls-wsat/CoordinatorPortType11',
  '/wp-admin/admin-ajax.php',
  '/wp-config.orig',
  '/wp-content/plugins/boldgrid-backup/cron/restore-info.json',
  '/wp-content/wp-plugins/wp-heyloyalty/vendor/phpunit/phpunit/src/Util/PHP/eval-stdin.php'
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
