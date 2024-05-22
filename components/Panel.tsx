import React from "react";

type PanelProps = React.JSX.IntrinsicElements['div']

export default function Panel({ children, className, ...props }: React.JSX.IntrinsicElements['div']) {
  const classNameDefault =
    'bg-white rounded-[10px]'

  return <div className={classNameDefault + className ? ` ${className}` : null} {...props}>{children}</div>;
}
