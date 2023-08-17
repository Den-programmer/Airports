import React from 'react'
import { IAirport } from '../models/models'
import { useNavigate } from 'react-router-dom'
import { Card } from 'react-bootstrap'

interface IProps {
  airport: IAirport
}

const AirportCard: React.FC<IProps> = ({ airport }) => {
  const navigate = useNavigate()

  const clickHandler = () => navigate(`/airport/${airport.id}`)
  return (
    <Card onClick={clickHandler} className="airport-card border border-primary">
    <Card.Body>
      <Card.Title className="airport-title">Airport Information</Card.Title>
      <div className="airport-info">
        {airport.name && <div className="info-row"><strong>Name:</strong> {airport.name}</div>}
        {airport.ident && <div className="info-row"><strong>Ident:</strong> {airport.ident}</div>}
        {airport.local_code && <div className="info-row"><strong>Local Code:</strong> {airport.local_code}</div>}
        {airport.region && <div className="info-row"><strong>Region:</strong> {airport.region}</div>}
        {airport.type && <div className="info-row"><strong>Type:</strong> {airport.type}</div>}
        {airport.country && <div className="info-row"><strong>Country:</strong> {airport.country}</div>}
      </div>
    </Card.Body>
  </Card>
  )
}

export default AirportCard