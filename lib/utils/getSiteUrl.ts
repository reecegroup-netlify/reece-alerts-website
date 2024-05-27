// get the canonical site URL
export default function getSiteUrl() {
  let url = process.env.URL
  switch (process.env.CONTEXT) {
    case 'production':
      url = process.env.URL
      break
    case 'deploy-preview':
    case 'branch-deploy':
      url = process.env.DEPLOY_PRIME_URL
      break
    case 'dev':
    case undefined:
      break
  }
  return `${url}` // no trailling slash /
}
