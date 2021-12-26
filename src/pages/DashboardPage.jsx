/** @jsxImportSource @emotion/react */
import DashboardCard from "../components/Shared/DashboardCard";
import DashboardLayout from "../components/Shared/DashboardLayout";
import Table from "../components/Shared/Table";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <DashboardCard />
      <Table />
    </DashboardLayout>
  );
};

export default DashboardPage;
