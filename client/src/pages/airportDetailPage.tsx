import React from 'react'
import { useParams } from 'react-router-dom'
import { airportAPI } from '../services/airportService'
import { Card, Row, Col } from 'react-bootstrap'

interface IProps {

}

const AirportDetailPage: React.FC<IProps> = (props) => {
  const params = useParams<'id'>()
  const { data } = airportAPI.useFetchAirportQuery(Number(params.id))
  const airport = data && data[0]
  return (
    <div className='container-md mx-auto pt-5'>
      <Card className="info-card">
      <Card.Body>
        <Row>
          <Col xs={12} md={6} className="left-column">
            <h1 className="airport-name">{airport?.name}</h1>
            <p className="airport-details">Type: {airport?.type}</p>
            <p className="airport-details">Continent: {airport?.continent}</p>
            <p className="airport-details">Region: {airport?.region}</p>
            <p className="airport-details">Country: {airport?.country}</p>
            <p className="airport-details">Municipality: {airport?.municipality}</p>
          </Col>
          <Col xs={12} md={6} className="right-column">
            <p className="airport-details">Ident: {airport?.ident}</p>
            <p className="airport-details">Local code: {airport?.local_code}</p>
            <p className="airport-details">Coordinates: {airport?.coordinates}</p>
            <p className="airport-details">Elevation in feet: {airport?.elevation_ft}</p>
            <p className="airport-details">GPS code: {airport?.gps_code}</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
    </div>
  )
}

export default AirportDetailPage