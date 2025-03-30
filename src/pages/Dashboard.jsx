import React from 'react'
import RecruitmentCard from '../components/RecruitmentCard'
import FilterBar from '../components/FilterBar'
import DashboardTop from '../components/DashboardTop'
const Dashboard = () => {
  return (
   <>
  <div className='mt-20'>
    <DashboardTop/>
    <FilterBar/>
  <RecruitmentCard/>
   <RecruitmentCard/>
   <RecruitmentCard/>
   <RecruitmentCard/>
  </div>
   </>
  )
}

export default Dashboard