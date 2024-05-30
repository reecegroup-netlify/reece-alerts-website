import { clsx } from 'clsx';
import Link, { LinkProps } from 'next/link';

interface BaseProps {
  children?: React.ReactNode
  className?: string;
  styleVariant?: 'tertiary' | 'text';
  stylePill?: boolean,
  styleSize?: 'md'
}

type ButtonAsLink = BaseProps &
  Omit<LinkProps, keyof BaseProps> & {}

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined;
  }

type ButtonProps = ButtonAsButton | ButtonAsLink

export default function Button(props: ButtonProps) {
  const { className, stylePill, styleVariant, href, children } = props;

  // @todo, simplify this with css varriables

  const initial = ['inline-flex', 'items-center']

  const borderColor = styleVariant === 'text' ? '' : 'border-[#EDEDED] hover:border-[#D5D5D5]'
  const borderRadius = styleVariant === 'text' ? '' : stylePill ? 'rounded-full' : 'rounded-lg';
  const borderWidth = styleVariant === 'text' ? '' : 'border'
  const border = [borderWidth, borderColor, borderRadius]

  const spacingPaddingX = styleVariant === 'text' ? '' : stylePill ? 'px-1.5 pr-4 sm:px-2 sm:pr-5' : 'px-3 sm:px-4'
  const spacingPaddingY = stylePill ? 'py-1.5 sm:py-2' : 'py-2'

  const spacingSpaceBetween = stylePill ? 'space-x-2 sm:space-x-2.5' : 'sm:space-x-2' // @todo find a way to optionally hide text on mobile
  const spacing = [spacingPaddingX, spacingPaddingY, spacingSpaceBetween]

  const typographyFontWeight = 'font-normal';
  const typographyFontSize = 'text-sm';
  const typographyLetterSpacing = 'tracking-wide';
  const typographyTextColor = 'text-[#003057]';
  const typograhyTextDecortation = styleVariant === 'text' ? 'hover:underline' : 'no-underline hover:no-underline'
  const typograhy = [typographyFontSize, typographyLetterSpacing, typographyFontWeight, typographyTextColor, typograhyTextDecortation]

  const backgroundColor = styleVariant === 'text' ? 'bg-none' : 'bg-white hover:bg-[#D5D5D5]'
  const background = [backgroundColor]

  const buttonClass = clsx(initial, typograhy, border, background, spacing, className)

  if (typeof href === 'string') {
    // @todo check if link is external
    const { ...rest } = props
    return (
      <Link
        {...rest}
        className={buttonClass}
        href={href}
      >
        {children}
      </Link>
    )
  }

  if (href === undefined) {
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

  throw new Error('could not determine the correct button type')
}
