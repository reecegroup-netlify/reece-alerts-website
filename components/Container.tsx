import { JSX } from 'react'

type ContainerProps = JSX.IntrinsicElements['div']

export default function Container({ children, className, ...props }: ContainerProps) {
  const classNameDefault =
    'mx-auto w-full px-3 sm:max-w-screen-sm sm:px-5 md:max-w-screen-md md:px-6 lg:max-w-screen-lg lg:px-8 xl:max-w-screen-lg xl:px-10 2xl:max-w-screen-xl'
  return (
    <div className={classNameDefault + className ? ` ${className}` : null} {...props}>
      {children}
    </div>
  )
}
