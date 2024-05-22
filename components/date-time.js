import { parseISO, format } from 'date-fns'

export default function DateTime({ dateTimeString }) {
  return (
    <time dateTime={dateTimeString}>
      {format(parseISO(dateTimeString), 'MMM	dd, yyyy - HH:mm:ss')}
    </time>
  )
}
