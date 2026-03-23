import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

function EventChart({ data, xKey = "type", barKey = "count" }) {
  return (
    <BarChart width={500} height={300} data={data}>
      <XAxis dataKey={xKey} />
      <YAxis />
      <Tooltip />
      <Bar dataKey={barKey} />
    </BarChart>
  );
}

export default EventChart;