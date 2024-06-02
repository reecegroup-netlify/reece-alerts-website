import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline'
import { CategoryFragment } from '@/lib/api/generated'
import clsx from 'clsx'

interface MetaCategoryProps extends React.HTMLAttributes<HTMLDivElement>, CategoryFragment {}

export default function MetaCategory({
  iconName,
  iconColour,
  slug,
  name,
  className,
  ...rest
}: MetaCategoryProps) {
  const initial = 'inline-flex items-center space-x-1'
  const metaCategoryClass = clsx(initial, className)

  const iconAttributes = {
    className: 'size-5',
    style: {
      color: iconColour.hex,
    },
  }

  let iconHTML = <></>
  switch (iconName) {
    case 'check-circle':
      iconHTML = <CheckCircleIcon {...iconAttributes} />
      break
    case 'exclamation-triangle':
      iconHTML = <ExclamationTriangleIcon {...iconAttributes} />
      break
    case 'information-circle':
      iconHTML = <InformationCircleIcon {...iconAttributes} />
      break
  }

  return (
    <div className={metaCategoryClass} {...rest}>
      {iconHTML} <span>{name}</span>
    </div>
  )
}
