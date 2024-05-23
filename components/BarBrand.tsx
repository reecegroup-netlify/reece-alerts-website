import Image from 'next/image'
import siteBrandBar from 'media/site-brand-bar@2x.png'

export default function BarBrand() {
  return (
    <div className="h-[15px] overflow-hidden sm:h-[20px] md:h-[25px] lg:h-[30px]">
      <Image
        src={siteBrandBar}
        width={3580}
        height={60}
        className="h-full w-auto min-w-full max-w-none"
        alt="Pattern of vertical stripes in navy blue and light grey"
      />
    </div>
  )
}
