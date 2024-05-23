import { parseISO, format, ParseISOOptions } from 'date-fns'

interface DateTimeProps {
  dateTime?: string;
  options?: ParseISOOptions
}

export default function DateTime({ dateTime, options }: DateTimeProps) {
  return (
    <time dateTime={dateTime}>
      {format(parseISO(dateTime, options), 'MMM	dd, yyyy - HH:mm:ss')}
    </time>
  )
}
