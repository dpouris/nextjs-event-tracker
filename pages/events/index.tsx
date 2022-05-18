import { GetServerSideProps } from "next";
import { Filter, EventContainer } from "../../components";
import type { EventProp } from "../../types/EventType";
import data from "../../dummyData.json";
import Skeleton from "../../components/Skeleton";

const AllEventsPage: React.FC<EventProp> = ({ events }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 my-4 ">
      <Filter />
      <EventContainer events={events} />
      <Skeleton></Skeleton>
    </div>
  );
};

export default AllEventsPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res } = context;
  res.setHeader("set-cookie", "foo=bar; Path=/;httpOnly");
  return { props: { events: data } };
};
