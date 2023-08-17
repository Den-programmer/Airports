import React, { useEffect, useState } from 'react'
import AirportSearch from '../components/AirportSearch'
import AirportFilter from '../components/AirportFilter'
import AirportCard from '../components/AirportCard'
import { airportAPI } from '../services/airportService'
import { IAirport } from '../models/models'
import ReactPaginate from 'react-paginate'
import { airportSlice } from '../store/slices/airportSlice'
import { useAppDispatch, useAppSelector } from '../hooks/redux'

interface IProps {

}

const MainPage: React.FC<IProps> = (props) => {
  const dispatch = useAppDispatch()
  const { airportsPortion, page } = useAppSelector(state => state.airport)
  const { data: airports, error, isLoading } = airportAPI.useFetchAllAirportsQuery({ page, limit: airportsPortion })
  const { data: airportsCount } = airportAPI.useFetchAirportsCountQuery('')
  const [pageCount, setPageCount] = useState(0)
  const { setAirportsCount, setSelectedPage } = airportSlice.actions

  useEffect(() => {
    if(airportsCount) {
      dispatch(setAirportsCount(airportsCount.count && airportsCount.count))
      setPageCount(airportsCount.count / airportsPortion)
    }
  }, [airportsCount?.count, page, airportsPortion])

  const handlePageClick = ({ selected }: { selected: number }) => {
    dispatch(setSelectedPage(selected + 1))
  }

  return (
    <div className='container-md mx-auto pt-5'>
      <AirportSearch />
      <AirportFilter />
      { isLoading && <p className="text-center text-lg">Loading...</p> }
      {error && <p className='text-center text-lg text-danger font-weight-bold'>Failed to load airports!</p>}
      {airports && airports.map((airport: IAirport) => <AirportCard key={airport.id} airport={airport}/>)}
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        forcePage={page - 1}
        containerClassName='d-flex list-unstyled user-select-none'
        pageClassName='py-1 px-2 border mr-2'
        previousClassName='py-1 px-2 border mr-2'
        previousLinkClassName=' link-secondary text-decoration-none'
        nextLinkClassName='link-secondary text-decoration-none'
        nextClassName='py-1 px-2 border'
        activeClassName='bg-secondary text-white'
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
      />
    </div>
  )
}

export default MainPage