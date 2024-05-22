import { JSX } from "react";

type ContainerProps = JSX.IntrinsicElements['div']

export default function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={`w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg 2xl:max-w-screen-xl px-3 sm:px-5 md:px-6 lg:px-8 xl:px-10 mx-auto ${className}`} {...props}>
      {children}
    </div>
  );
}


