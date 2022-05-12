import { useRouter } from "next/router";
import { useEventContext } from "../context/EventContext";

const Filter = () => {
  const { events } = useEventContext();
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const year = ((e.target as HTMLFormElement)[0] as HTMLOptionElement).value;
    const month = ((e.target as HTMLFormElement)[1] as HTMLOptionElement).value;

    router.push(`/events/filter/${year}/${month}`);
  }

  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const YEARS: string[] = [];
  events?.map((event) => {
    const year = event.date.split(",")[1].trim();
    if (YEARS?.includes(year)) return;
    YEARS?.push(year);
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-4 shadow-lg rounded px-5 py-2 max-w-fit "
    >
      <div className="flex items-center">
        <label htmlFor="year">Year</label>
        <p className="h-6 bg-gray-500 w-[1px] mx-2"></p>
        <select name="year">
          {YEARS?.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center">
        <label htmlFor="month">Month</label>
        <p className="h-6 bg-gray-500 w-[1px] mx-2"></p>
        <select name="month">
          {MONTHS.map((month) => {
            return (
              <option key={month} value={month}>
                {month}
              </option>
            );
          })}
        </select>
      </div>

      <button
        type="submit"
        className="bg-emerald-400 hover:bg-emerald-500 transition-colors text-white rounded py-1 px-2"
      >
        Find Events &rarr;
      </button>
    </form>
  );
};

export default Filter;
