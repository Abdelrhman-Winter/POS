import React, { useMemo } from "react";
import styles from "./BranchPerformanceTable.module.scss";

import { FaArrowUp } from "@react-icons/all-files/fa/FaArrowUp";
import { FaArrowDown } from "@react-icons/all-files/fa/FaArrowDown";

interface BranchPerformance {
  branchName: string;
  totalOrders: number;
  totalSales: string;
  adsSpent: string;
  refunds: number;
  isPositive: boolean;
}

const BranchPerformanceTable: React.FC = () => {
  const branchData: BranchPerformance[] = useMemo(
    () => [
      {
        branchName: "Branch A",
        totalOrders: 300,
        totalSales: "$20,000",
        adsSpent: "$2,500",
        refunds: 5,
        isPositive: true,
      },
      {
        branchName: "Branch B",
        totalOrders: 250,
        totalSales: "$18,000",
        adsSpent: "$2,000",
        refunds: 8,
        isPositive: false,
      },
      {
        branchName: "Branch C",
        totalOrders: 400,
        totalSales: "$25,000",
        adsSpent: "$3,500",
        refunds: 2,
        isPositive: true,
      },
      {
        branchName: "Branch D",
        totalOrders: 350,
        totalSales: "$22,000",
        adsSpent: "$3,000",
        refunds: 3,
        isPositive: true,
      },
      {
        branchName: "Branch E",
        totalOrders: 200,
        totalSales: "$15,000",
        adsSpent: "$1,500",
        refunds: 10,
        isPositive: false,
      },
    ],
    []
  );

  return (
    <div className={styles["branch-table-container"]}>
      <h2>Branch Performance</h2>
      <table className={styles["branch-table"]}>
        <thead>
          <tr>
            <th>Branch</th>
            <th>Total Orders</th>
            <th>Total Sales</th>
            <th>Ads Spent</th>
            <th>Refunds</th>
          </tr>
        </thead>
        <tbody>
          {branchData.map((branch, index) => (
            <tr key={index}>
              <td>{branch.branchName}</td>
              <td>{branch.totalOrders}</td>
              <td>{branch.totalSales}</td>
              <td>{branch.adsSpent}</td>
              <td
                className={
                  branch.isPositive
                    ? styles["status-up"]
                    : styles["status-down"]
                }
              >
                {branch.refunds}
                {branch.isPositive ? (
                  <FaArrowUp className={styles["status-icon"]} />
                ) : (
                  <FaArrowDown className={styles["status-icon"]} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(BranchPerformanceTable);
