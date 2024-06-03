// get the canonical site URL
// https://docs.netlify.com/configure-builds/environment-variables/#build-metadata
// https://docs.netlify.com/configure-builds/environment-variables/#deploy-urls-and-metadata

import getDeployContext from './getDeployContext'

const { URL, DEPLOY_PRIME_URL } = process.env

export default function getSiteUrl() {
  let url = URL
  switch (getDeployContext()) {
    case 'production':
      break
    case 'deploy-preview':
    case 'branch-deploy':
      url = DEPLOY_PRIME_URL
      break
    case 'dev':
    case undefined:
      break
  }
  return `${url}` // no trailling slash /
}
