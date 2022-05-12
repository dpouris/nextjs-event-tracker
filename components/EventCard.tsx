import Image from "next/image";
import Link from "next/link";
import { AiFillCalendar, AiFillEnvironment } from "react-icons/ai";
import type Event from "../types/EventType";

const EventCard = ({ event }: { event: Event }) => {
  return (
    <div className="flex shadow-md rounded-lg overflow-hidden min-h-[25vh] relative">
      <Image
        src={event.url}
        width={250}
        height={250}
        className="overflow-hidden object-cover"
        alt={event.title}
      />
      <div className="flex flex-col gap-2 px-3 py-2">
        <h1 className="text-2xl font-medium">{event.title}</h1>
        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <AiFillCalendar />
          <p>{event.date}</p>
        </div>
        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <AiFillEnvironment />
          <p>{event.loc}</p>
        </div>
        <div className="bg-emerald-400 hover:bg-emerald-500 transition-colors text-white max-w-fit px-2 py-1 rounded-tl-lg absolute right-0 bottom-0">
          <Link href={`/events/${event.id}`}>
            <button>Explore Event &rarr;</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
