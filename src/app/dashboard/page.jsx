import AllAppoint from '@/component/AllAppoint';
import ProfilePage from '@/component/ProfilePage';
import { Tabs } from '@heroui/react';
import { FaExclamationTriangle } from 'react-icons/fa';

export const metadata = {
  title: "Dashboard - DocAppoint ",
  description: "A doctor appointment booking application built with Next.js and Heroui.",
};

const Dashboard = async () => {
  const res = await fetch(`http://localhost:8000/getPatientData`, {
    method: 'GET',
    headers: { 'content-type': 'application/json' }
  })
  const datas = await res.json()
  return (
    <div className='py-10 px-5 md:px-15 lg:px-30'>
      <h1 className='text-5xl font-bold container mb-10 text-cyan-900'>DashBoard</h1>
      <div className=''>
        <Tabs className="w-full">
          <Tabs.ListContainer className=' md:w-80'>
            <Tabs.List aria-label="Options">
              <Tabs.Tab id="allappointments">
                All Appointments
                <Tabs.Indicator />
              </Tabs.Tab>
              <Tabs.Tab id="profile">
                Profile
                <Tabs.Indicator />
              </Tabs.Tab>
            </Tabs.List>
          </Tabs.ListContainer>
          <Tabs.Panel className="pt-4 w-full" id="allappointments">
            {
              datas.length === 0 &&
              <div className='py-20'>
                <p ><FaExclamationTriangle className='text-8xl animate-bounce text-muted flex mx-auto mb-5' /></p>
                <p className='text-center text-4xl font-bold'>No Appointments Yet</p>
                <p className='text-center text-4xl font-bold mt-5'>Please Book An Appointment</p>
              </div>
            }
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
              {
                datas?.map((data) => (

                  <AllAppoint key={data._id} data={data}></AllAppoint>

                ))
              }
            </div>

          </Tabs.Panel>
          <Tabs.Panel className="pt-4 w-full" id="profile">
              <ProfilePage></ProfilePage>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;