import { Image } from 'react-datocms'

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <div className="mr-4 h-12 w-12">
        <Image alt={name} data={picture.responsiveImage} className="rounded-full" />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
