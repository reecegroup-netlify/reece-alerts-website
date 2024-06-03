const { NEXT_DEPLOY_CONTEXT } = process.env

// get the build's deploy context
// https://docs.netlify.com/configure-builds/environment-variables/
export default function getDeployContext() {
  return NEXT_DEPLOY_CONTEXT ? NEXT_DEPLOY_CONTEXT : 'dev'
}
