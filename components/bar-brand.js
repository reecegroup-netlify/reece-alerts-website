import Image from "next/image";
import siteBrandBar from "media/site-brand-bar@2x.png";

export default function BarBrand() {
  return (
    <div className="h-[15px] sm:h-[20px] md:h-[25px] lg:h-[30px] overflow-hidden">
      <Image
        src={siteBrandBar}
        width={3580}
        height={60}
        className="min-w-full max-w-none w-auto h-full"
        alt="Pattern of vertical stripes in navy blue and light grey"
      />
    </div>
  );
}
