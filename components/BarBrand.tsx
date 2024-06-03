import Image from 'next/image'
import siteBrandBar from 'media/site-brand-bar@2x.png'

export default function BarBrand() {
  return (
    <div
      className="h-[15px] overflow-hidden bg-cover bg-center bg-repeat sm:h-[20px] md:h-[25px] lg:h-[30px]"
      style={{ backgroundImage: `url(${siteBrandBar.src})` }}
    />
  )
}
