import { AiFillCalendar, AiFillEnvironment } from "react-icons/ai";
import dummyData from "../../dummyData.json";
import Image from "next/image";
import type { GetStaticProps } from "next";
import type { EventProp } from "../../types/EventType";

const EventPage = ({ currentEvent }: EventProp) => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="bg-gradient-to-b from-emerald-300 to-sky-500 w-screen h-[13rem] flex items-center justify-center text-white text-5xl font-bold relative whitespace-nowrap">
        <h1>{currentEvent?.title}</h1>
      </div>
      <div className="bg-slate-800 shadow-lg shadow-slate-400 rounded-lg px-10 py-6 w-[35rem] flex items-center justify-center gap-5 absolute top-[13rem]">
        <Image
          src={currentEvent!?.url}
          alt={currentEvent?.title}
          width={300}
          height={300}
          className="object-cover rounded-full"
        />
        <div className="flex flex-col gap-2 text-white">
          <div className="flex items-center gap-3 text-left">
            <AiFillEnvironment />
            <p>{currentEvent?.loc}</p>
          </div>
          <div className="flex items-center gap-3 text-left">
            <AiFillCalendar />
            <p>{currentEvent?.date}</p>
          </div>
        </div>
        <p className="absolute -bottom-10">{currentEvent?.description}</p>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = dummyData.map((event) => ({
    params: {
      event: event.id.toString(),
    },
  }));

  return { paths: paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params!;

  const eventId = params.event;
  const currentEvent = dummyData?.find(
    (event) => event.id.toString() === eventId
  );

  return { props: { currentEvent }, revalidate: 10 };
};

export default EventPage;
