import { LineChart } from '@mui/x-charts';

export default function TLineChart2() {
  // Replace these arrays with your actual data
  const pData = [10, 20, 15, 25, 30];
  const uData = [5, 15, 10, 20, 25];
  const xLabels = ['', 'Week 1', 'Week 2', 'Week 3', 'Week 4'];

  return (
    <LineChart
      width={300}
      height={300}
      series={[
        { data: pData, label: 'Hosting' },
        { data: uData, label: 'Bookings' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
  );
}
