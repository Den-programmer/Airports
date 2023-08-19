import React, { useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { airportSlice } from '../store/slices/airportSlice'
import ResetButton from './common/resetBtn'

interface IProps {

}

const AirportFilter: React.FC<IProps> = (props) => {
  const dispatch = useAppDispatch()
  const { types, regions, countries } = useAppSelector(state => state.airportFilters)
  const { currentType, currentRegion, currentCountry } = useAppSelector(state => state.airport)
  const { setCurrentType, setCurrentRegion, setCurrentCountry } = airportSlice.actions

  const setCurrentTypeHandler: React.ChangeEventHandler<HTMLSelectElement>  = (event) => {
    dispatch(setCurrentType(event.target.value))
  }

  const setCurrentRegionHandler: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    dispatch(setCurrentRegion(event.target.value))
  }

  const setCurrentCountryHandler: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    debugger
    dispatch(setCurrentCountry(event.target.value))
  }

  const resetFilters = () => {
    dispatch(setCurrentType(''))
    dispatch(setCurrentRegion(''))
    dispatch(setCurrentCountry(''))
  }
  

  const typesOptions = types.map(type => <option key={type}>{type}</option>)
  const regionsOptions = regions.map(region => <option key={region}>{region}</option>)
  const countriesOptions = countries.map(country => <option key={country}>{country}</option>)
  return (
    <Container className="mt-4">
      <Row>
        <Col md={6}>
          <Form.Label className='fw-bold'>Filter:</Form.Label>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={4}>
          <Form.Select value={currentType} onChange={setCurrentTypeHandler}>
            <option>Type:</option>
            {typesOptions}
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Select value={currentCountry} onChange={setCurrentCountryHandler}>
            <option>Country:</option>
            {countriesOptions}
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Select value={currentRegion} onChange={setCurrentRegionHandler}>
            <option>Region:</option>
            {regionsOptions}
          </Form.Select>
        </Col>
      </Row>
      <Row>
          <ResetButton clickHandler={resetFilters}/>
      </Row>
    </Container>
  )
}

export default AirportFilter