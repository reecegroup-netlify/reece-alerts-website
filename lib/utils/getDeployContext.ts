const { NEXT_CONTEXT } = process.env

// get the build's deploy context
// https://docs.netlify.com/configure-builds/environment-variables/
export default function getDeployContext() {
  return NEXT_CONTEXT ? NEXT_CONTEXT : 'dev'
}
