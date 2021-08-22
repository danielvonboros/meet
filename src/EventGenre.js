import React, { useEffect, useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);

  const genres = ["React", "JavaScript", "Angular", "Node", "jQuery"];
  const COLORS = ["#5e6b61", "#64b8b4", "#444f9e", "#1d6267", "#6db5fd"];

  const getData = () => {
    const data = genres.map((genre) => {
      const value = events.filter(({ summary }) =>
        summary.replace(/,/g, "").split(" ").includes(genre)
      ).length;
      return {
        name: genre,
        value: value,
      };
    });
    return data;
  };

  useEffect(() => {
    setData(() => getData());
  }, [events]);

  return (
    <ResponsiveContainer height={400}>
      <PieChart width={400} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenre;
