import { parseISO, format, ParseISOOptions } from 'date-fns'

interface MetaDateTimeProps extends React.TimeHTMLAttributes<HTMLTimeElement> {
  dateTime: string // make datetime required
  options?: ParseISOOptions
}

export default function MetaDateTime({ dateTime, options }: MetaDateTimeProps) {
  return (
    <time dateTime={dateTime}>{format(parseISO(dateTime, options), 'MMM	dd, yyyy - HH:mm:ss')}</time>
  )
}
