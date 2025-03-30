import React from 'react'
import RecruitmentCard from '../components/RecruitmentCard'
import FilterBar from '../components/FilterBar'
const Dashboard = () => {
  return (
   <>
  <div className='mt-20'>
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