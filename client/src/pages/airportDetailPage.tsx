import React from 'react'
import { useParams } from 'react-router-dom'

interface IProps {
  
}

const AirportDetailPage: React.FC<IProps> = (props) => {
  const params = useParams<'id'>()

  return (
    <div className='container-md mx-auto pt-5'>
        <h1>Airport {params.id}</h1>
    </div>
  )
}

export default AirportDetailPage