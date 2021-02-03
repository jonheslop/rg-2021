import { parseISO, format } from "date-fns";

export default function DateFormatter({ dateString, season }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {season} {format(date, "yyyy")}
    </time>
  );
}
