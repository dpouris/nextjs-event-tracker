import React from "react";
import EventCard from "./EventCard";
import type { EventProp } from "../types/EventType";

const EventContainer = ({ events }: EventProp) => {
  return (
    <div className="flex flex-col gap-3">
      {events?.map((event) => {
        return <EventCard key={event.id} event={event} />;
      })}
    </div>
  );
};

export default EventContainer;
