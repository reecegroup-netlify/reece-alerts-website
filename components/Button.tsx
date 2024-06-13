import { clsx } from 'clsx'
import Link, { LinkProps } from 'next/link'

interface BaseProps {
  children?: React.ReactNode
  className?: string
  variant?: 'default' | 'text'
  rounded?: 'default' | 'pill'
}

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: 'button'
  }

type ButtonAsExternalLink = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    as: 'externallink'
  }

type ButtonAsLink = BaseProps &
  Omit<LinkProps, keyof BaseProps> & {
    as: 'link'
  }

type ButtonAsSpan = BaseProps &
  Omit<React.HTMLAttributes<HTMLSpanElement>, keyof BaseProps> & {
    as: 'span'
  }

type ButtonProps = ButtonAsButton | ButtonAsExternalLink | ButtonAsLink | ButtonAsSpan

export default function Button(props: ButtonProps) {
  const { className, rounded = 'default', variant = 'default', children } = props

  // @todo, simplify this with css varriables

  const initial = ['inline-flex', 'items-center']

  const borderColor = variant === 'text' ? '' : 'border-[#EDEDED] hover:border-[#D5D5D5]'
  const borderRadius = variant === 'text' ? '' : rounded === 'pill' ? 'rounded-full' : 'rounded-lg'
  const borderWidth = variant === 'text' ? '' : 'border'
  const border = [borderWidth, borderColor, borderRadius]

  const spacingPaddingX =
    variant === 'text' ? '' : rounded === 'pill' ? 'px-1.5 pr-4 sm:px-2 sm:pr-5' : 'px-3 sm:px-4'
  const spacingPaddingY = rounded === 'pill' ? 'py-1.5 sm:py-2' : 'py-2'

  const spacingSpaceBetween = rounded === 'pill' ? 'space-x-2 sm:space-x-2.5' : 'sm:space-x-2' // @todo find a way to optionally hide text on mobile
  const spacing = [spacingPaddingX, spacingPaddingY, spacingSpaceBetween]

  const typographyFontWeight = 'font-normal'
  const typographyFontSize = 'text-sm'
  const typographyLetterSpacing = 'tracking-wide'
  const typographyTextColor = 'text-[#003057]'
  const typograhyTextDecortation =
    variant === 'text' ? 'hover:underline' : 'no-underline hover:no-underline'
  const typograhy = [
    typographyFontSize,
    typographyLetterSpacing,
    typographyFontWeight,
    typographyTextColor,
    typograhyTextDecortation,
  ]

  const backgroundColor = variant === 'text' ? 'bg-none' : 'bg-white hover:bg-[#D5D5D5]'
  const background = [backgroundColor]

  const buttonClass = clsx(initial, typograhy, border, background, spacing, className)

  if (props.as === 'link') {
    const { ...rest } = props
    return (
      <Link {...rest} className={buttonClass} as={props.href}>
        {children}
      </Link>
    )
  } else if (props.as === 'externallink') {
    const { ...rest } = props
    return (
      <a
        // provide good + secure defaults while still allowing them to be overwritten
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
        className={buttonClass}
      >
        {children}
      </a>
    )
  } else if (props.as === 'span') {
    const { ...rest } = props
    return (
      <span {...rest} className={buttonClass}>
        {children}
      </span>
    )
  } else {
    const { ...rest } = props
    return (
      <button
        // provide accessible defaults while still allowing them to be overwritten
        type="button"
        {...rest}
        className={buttonClass}
      >
        {children}
      </button>
    )
  }
}
