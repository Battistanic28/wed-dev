import Page from '@/components/Page';
import InfoCard from '@/components/InfoCard';

export default function SchedulePage() {
  return (
    <Page title="Schedule">
      <InfoCard title="Wednesday - June 25th 2025" description="Welcome party 5pm" />
      <InfoCard title="Thursday - June 26th 2025" description="Ceremony 5pm" />
      <InfoCard title="Friday - June 27th 2025" description="Brunch 10am" />
    </Page>
  );
}
