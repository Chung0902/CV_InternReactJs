import React from 'react'
import WorkExperience from '../component/WorkExperience'
import Education from '../component/Education'
import CareerObjective from '../component/CareerObjective'
import Activities from '../component/Activities'

const PartRight = () => {
  return (
    <div className="rightLeft">
            <CareerObjective/>
            <Education/>
            <WorkExperience/>
            <Activities/>
        </div>
  )
}

export default PartRight