"use client";
import React, { useMemo } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import styles from "./SalesChart.module.scss";

// Dynamically import FaArrowUp icon
import { FaArrowUp } from "@react-icons/all-files/fa/FaArrowUp";

const SalesChart: React.FC = () => {
  const data = useMemo(
    () => [
      { month: "Jan", clients: 30, orders: 40 },
      { month: "Feb", clients: 50, orders: 70 },
      { month: "Mar", clients: 45, orders: 55 },
      { month: "Apr", clients: 50, orders: 30 },
      { month: "May", clients: 75, orders: 50 },
      { month: "Jun", clients: 100, orders: 70 },
      { month: "Jul", clients: 80, orders: 90 },
      { month: "Aug", clients: 70, orders: 85 },
      { month: "Sep", clients: 60, orders: 65 },
      { month: "Oct", clients: 90, orders: 95 },
      { month: "Nov", clients: 100, orders: 120 },
      { month: "Dec", clients: 120, orders: 140 },
    ],
    []
  );

  return (
    <div className={styles["chart-container"]}>
      <div className={styles["chart-header"]}>
        <h2>Sales overview</h2>
        <div className={styles["chart-percentage"]}>
          <FaArrowUp />
          4% more in 2021
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorPv1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#7928ca" stopOpacity={0.8} />
              <stop offset="55%" stopColor="#7928ca" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff0080" stopOpacity={0.8} />
              <stop offset="55%" stopColor="#ff0080" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="clients"
            stroke="#7928ca"
            fill="url(#colorPv1)"
            strokeWidth={2}
          />
          <Area
            type="monotone"
            dataKey="orders"
            stroke="#ff0080"
            strokeWidth={2}
            fill="url(#colorPv2)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default React.memo(SalesChart);
