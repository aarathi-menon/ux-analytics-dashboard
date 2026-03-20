import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

function EventChart({ data }) {
  return (
    <BarChart width={500} height={300} data={data}>
      <XAxis dataKey="type" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="count" />
    </BarChart>
  );
}

export default EventChart;