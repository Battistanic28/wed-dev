import Page from '@/components/Page';
import CalendarCard from '@/components/CalendarCard';
import config from '../../config/config.json';

export default function SchedulePage() {
  const { title, description, events } = config.SCHEDULE;
  return (
    <Page title={title} description={description}>
      {events.map((event, idx) => {
        return (
          <CalendarCard
            key={idx}
            title={event.title}
            description={event.description}
            content={event.content}
            day={event.day}
            date={event.date}
            month={event.month}
            href={event.href}
          />
        );
      })}
    </Page>
  );
}
