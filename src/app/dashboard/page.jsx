// import AllAppoint from '@/component/AllAppoint';
import DashBoard from '@/component/DashBoard';
// import ProfilePage from '@/component/ProfilePage';
// import { Tabs } from '@heroui/react';
// import { FaExclamationTriangle } from 'react-icons/fa';

export const metadata = {
  title: "Dashboard - DocAppoint ",
  description: "A doctor appointment booking application built with Next.js and Heroui.",
};

const Dashboard = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/getPatientData`, {
    cache: 'no-store',
    method: 'GET',
    headers: { 'content-type': 'application/json' }
  })
  const datas = await res.json()
  return (
    <DashBoard datas={datas}></DashBoard>
  );
};

export default Dashboard;