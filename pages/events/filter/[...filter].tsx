import { useRouter } from "next/router";
import { EventCard } from "../../../components";
import { useEventContext } from "../../../context/EventContext";

const FilterEventsPage = () => {
  const router = useRouter();
  const { events } = useEventContext();

  if (router.query.hasOwnProperty("filter")) {
    const eventYear = router.query.filter![0];
    const eventMonth = router.query.filter![1];

    const filteredEvents = events.filter((event) => {
      return event.date.includes(eventYear) && event.date.includes(eventMonth);
    });

    if (filteredEvents.length <= 0)
      return (
        <div>
          <h1 className="text-gray-400 mt-10">No event on that date.</h1>
        </div>
      );

    return (
      <div className="my-4 flex flex-col gap-3 items-center justify-center">
        <h1 className="text-4xl font-medium mb-4">
          Events on {eventMonth} of {eventYear}
        </h1>
        {filteredEvents?.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    );
  }
};

export default FilterEventsPage;
