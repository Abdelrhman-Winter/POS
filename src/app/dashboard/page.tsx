"use client";

import dynamic from "next/dynamic";
import styles from "./Dashboard.module.scss";
import { Suspense } from "react";
import ComponentLoader from "@/components/componentLoader/ComponentLoader";

import CardsContainer from "@/components/adminDashboard/cardsContainer/CardsContainer";
import BranchPerformanceTable from "@/components/adminDashboard/branchPerformanceTable/BranchPerformanceTable";
import SalesChart from "@/components/adminDashboard/salesChart/SalesChart";
import TopSellingOrdersTable from "@/components/adminDashboard/topSellingOrdersTable/TopSellingOrdersTable";
import DonutChart from "@/components/adminDashboard/donutChart/DonutChart";

const Dashboard: React.FC = () => {
  return (
    <div className={styles.container}>
      <CardsContainer />
      <div className={styles.cols}>
        <div className={styles.leftSection}>
          <Suspense fallback={<ComponentLoader />} key="salesChart">
            <SalesChart />
          </Suspense>
          <BranchPerformanceTable />
        </div>
        <div className={styles.rightSection}>
          <Suspense fallback={<ComponentLoader />} key="topSellingOrdersTable">
            <TopSellingOrdersTable />
          </Suspense>
          <Suspense fallback={<ComponentLoader />} key="donutChart">
            <DonutChart />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
