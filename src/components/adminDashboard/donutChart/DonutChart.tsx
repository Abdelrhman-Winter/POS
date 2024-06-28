"use client";
import React, { useMemo } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styles from "./DonutChart.module.scss";

interface DataEntry {
  name: string;
  value: number;
}

const DonutChart: React.FC = () => {
  const data: DataEntry[] = useMemo(
    () => [
      { name: "Branch A", value: 400 },
      { name: "Branch B", value: 300 },
      { name: "Branch C", value: 300 },
      { name: "Branch D", value: 100 },
      { name: "Branch E", value: 100 },
    ],
    []
  );

  const COLORS = useMemo(
    () => ["#7928ca", "#ff0080", "#7928cab3", "#7928ca5e", "#ff0080ad"],
    []
  );

  return (
    <div className={styles["chart-container"]}>
      <div className={styles["chart-header"]}>
        <h2>Branch overview</h2>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={70}
            outerRadius={90}
            fill="#7928ca"
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="bottom"
            align="center"
            iconType="circle"
            iconSize={10}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default React.memo(DonutChart);
