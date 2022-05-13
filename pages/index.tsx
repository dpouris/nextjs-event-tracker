import type { GetStaticProps, NextPage } from "next";
import React from "react";
import { EventContainer } from "../components";
import data from "../dummyData.json";
import type { EventProp } from "../types/EventType";

const Home = ({ events }: EventProp) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 my-4">
      <h1 className="text-3xl font-medium text-slate-700 mb-4 border-y-2 border-emerald-400 rounded-lg py-4 px-3 ">
        FEATURED EVENTS
      </h1>
      <EventContainer events={events} />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const featuredEvents = data.filter((event) => {
    if (event.featured) return event;
  });

  return { props: { events: featuredEvents } };
};
