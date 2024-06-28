import styles from "./CardsContainer.module.scss";
import { FaDollarSign } from "@react-icons/all-files/fa/FaDollarSign";
import { FaUsers } from "@react-icons/all-files/fa/FaUsers";
import { FaRegMoneyBillAlt } from "@react-icons/all-files/fa/FaRegMoneyBillAlt";
import { IoFastFoodOutline } from "@react-icons/all-files/io5/IoFastFoodOutline";

import DashboardCard from "../dashboardCard/DashboardCard";
import { Suspense } from "react";
import ComponentLoader from "@/components/componentLoader/ComponentLoader";

const CardContainer = () => {
  const data = [
    {
      icon: <FaDollarSign />,
      title: "Today's Money",
      value: "$53,000",
      percentage: 55,
      isPositive: true,
    },
    {
      icon: <IoFastFoodOutline />,
      title: "Today's Orders",
      value: "4,300",
      percentage: 3,
      isPositive: true,
    },
    {
      icon: <FaUsers />,
      title: "Clients",
      value: "3,462",
      percentage: 2.06,
      isPositive: false,
    },
    {
      icon: <FaRegMoneyBillAlt />,
      title: "Sales",
      value: "$103,430",
      percentage: 5.42,
      isPositive: true,
    },
  ];
  return (
    <div className={styles.cardContainer}>
      {data.map((item, index) => (
        <Suspense fallback={<ComponentLoader />} key={index}>
          <DashboardCard
            icon={item.icon}
            title={item.title}
            value={item.value}
            percentage={item.percentage}
            isPositive={item.isPositive}
          />
        </Suspense>
      ))}
    </div>
  );
};

export default CardContainer;
