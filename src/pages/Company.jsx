import React from 'react'
import CreateCompanyForm from '../components/CreateCompanyForm'
import ComprehensiveCreateForm from '../components/ComprehensiveCreateForm'

const Company = () => {
  return (
    <div className='mt-20'>
        <CreateCompanyForm/>
        <ComprehensiveCreateForm/>
    </div>
  )
}

export default Company