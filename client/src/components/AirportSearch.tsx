import React, { useEffect } from 'react'
import { useInput } from '../hooks/input'
import { useDebounce } from '../hooks/debounce'
import { FormControl, InputGroup } from 'react-bootstrap'
import { useAppDispatch } from '../hooks/redux'
import { airportSlice } from '../store/slices/airportSlice'

interface IProps {

}

const AirportSearch: React.FC<IProps> = (props) => {
  const dispatch = useAppDispatch()
  const { setSearchTerm } = airportSlice.actions
  const input = useInput()
  const debounced = useDebounce<string>(input.value)

  useEffect(() => {
    dispatch(setSearchTerm(debounced))
  }, [debounced])
  return (
    <div className='mb-4'>
      <InputGroup className="search-input">
        <FormControl
          placeholder="Search airports..."
          aria-label="Search"
          aria-describedby="search-input"
          {...input}
        />
        <InputGroup.Text id="search-input" className="search-icon">
          <i className="bi bi-search"></i>
        </InputGroup.Text>
      </InputGroup>
    </div>
  )
}

export default AirportSearch