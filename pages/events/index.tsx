import { GetServerSideProps, GetStaticProps } from "next";
import { Filter, EventContainer } from "../../components";
import type { EventProp } from "../../types/EventType";
import data from "../../dummyData.json";

const AllEventsPage = ({ events }: EventProp) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 my-4 ">
      <Filter />
      <EventContainer events={events} />
    </div>
  );
};

export default AllEventsPage;

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: { events: data } };
};
