import React from "react";

interface PanelProps extends React.HTMLAttributes<HTMLDivElement> { }

export default function Panel({ children, className, ...props }: PanelProps) {
  const classNameDefault =
    'bg-white rounded-[10px] px-3 sm:px-5 md:px-6 lg:px-8 xl:px-10 py-10'

  return <div className={className ? `${classNameDefault} ${className}` : classNameDefault} {...props}>{children}</div>;
}
