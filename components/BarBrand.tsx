import siteBrandBar from 'media/site-brand-bar@2x.png'
import { getImageProps } from 'next/image'

function getBackgroundImage(srcSet = '') {
  const imageSet = srcSet
    .split(', ')
    .map((str) => {
      const [url, dpi] = str.split(' ')
      return `url("${url}") ${dpi}`
    })
    .join(', ')
  return `image-set(${imageSet})`
}

export default function BarBrand() {
  const {
    props: { srcSet },
  } = getImageProps({
    alt: '',
    width: siteBrandBar.width / 2,
    height: siteBrandBar.height / 2,
    src: siteBrandBar.src,
    quality: 100,
  })
  const backgroundImage = getBackgroundImage(srcSet)
  const style = { backgroundImage }

  return (
    <div
      className="h-[15px] overflow-hidden bg-cover bg-center bg-repeat sm:h-[20px] md:h-[25px] lg:h-[30px]"
      style={style}
    />
  )
}
