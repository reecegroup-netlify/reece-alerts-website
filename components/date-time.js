import { parseISO, format } from "date-fns";

export default function DateTime({ dateTimeString = "2024-05-06T03:45:21Z" }) {
  const dateTime = parseISO(dateTimeString);
  return (
    <time dateTime={dateTimeString}>
      {format(dateTime, "MMM	dd, yyyy - HH:mm:ss")}
    </time>
  );
}
