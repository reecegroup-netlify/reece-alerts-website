const { CONTEXT } = process.env

// get the build's deploy context
// https://docs.netlify.com/configure-builds/environment-variables/
export default function getDeployContext() {
  return CONTEXT ? CONTEXT : 'dev'
}
