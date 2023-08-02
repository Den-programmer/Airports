import React from 'react'
import AirportSearch from '../components/AirportSearch'
import AirportFilter from '../components/AirportFilter'
import AirportCard from '../components/AirportCard'


interface IProps {
  
}

const MainPage: React.FC<IProps> = (props) => {
  return (
    <div className='container-md mx-auto pt-5'>
        <AirportSearch />
        <AirportFilter />
        <AirportCard />
    </div>
  )
}

export default MainPage