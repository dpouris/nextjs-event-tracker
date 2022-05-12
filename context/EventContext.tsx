import React, { createContext, useContext, useState } from "react";
import dummyData from "../dummyData.json";
import type Event from "../types/EventType";

export const Context = createContext({} as { events: Event[] });

export default function EventContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [events, setEvents] = useState(dummyData);

  return <Context.Provider value={{ events }}>{children}</Context.Provider>;
}

export const useEventContext = (): { events: Event[] } => useContext(Context)!;
