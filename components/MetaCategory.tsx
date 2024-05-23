import { CheckCircleIcon, ExclamationTriangleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'

interface Category {
  iconName: 'check-circle' | 'exclamation-triangle' | 'information-circle',
  iconColour: { hex: string },
  name: string,
  slug: string
}

interface MetaCategoryProps extends React.HTMLAttributes<HTMLDivElement>, Category {
}

export default function MetaCategory({ iconName, iconColour, name }: MetaCategoryProps) {

  const iconAttributes = { className: 'size-4', style: { color: iconColour.hex } }

  let iconHTML = <></>
  switch (iconName) {
    case 'check-circle':
      iconHTML = <CheckCircleIcon {...iconAttributes} />;
      break;
    case 'exclamation-triangle':
      iconHTML = <ExclamationTriangleIcon {...iconAttributes} />;
      break;
    case 'information-circle':
      iconHTML = <InformationCircleIcon {...iconAttributes} />;
      break;
  }

  return (
    <div
      className="inline-flex items-center text-sm font-normal sm:space-x-2"
    >
      {iconHTML} <span>{name}</span>
    </div>
  )
}
