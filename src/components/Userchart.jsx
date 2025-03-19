import { LineChart } from '@mui/x-charts';

export default function UserChart() {
  // Replace these arrays with your actual data
  const pData = [10, 20, 15, 25, 30];
  const xLabels = ['', 'Week 1', 'Week 2', 'Week 3', 'Week 4'];

  return (
    <LineChart
      width={300}
      height={300}
      series={[
        { data: pData, label: 'Bookings' },
        
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
  );
}
