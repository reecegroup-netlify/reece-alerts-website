interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Container({ children, className, ...props }: ContainerProps) {
  const classNameDefault =
    'mx-auto w-full px-3 sm:max-w-screen-sm sm:px-5 md:max-w-screen-md md:px-6 lg:max-w-screen-lg lg:px-8 xl:max-w-screen-lg xl:px-10 2xl:max-w-screen-xl'
  return (
    <div className={className ? `${classNameDefault} ${className}` : classNameDefault} {...props}>
      {children}
    </div>
  )
}
