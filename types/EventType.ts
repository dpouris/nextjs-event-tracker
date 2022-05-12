export default interface Event {
  id: number;
  title: string;
  description: string;
  loc: string;
  url: string;
  date: string;
  featured: boolean;
}

export type EventProp = {
  events?: Event[];
  currentEvent?: Event;
};
