import React, { useEffect, useState } from 'react'
import AirportSearch from '../components/AirportSearch'
import AirportFilter from '../components/AirportFilter'
import AirportCard from '../components/AirportCard'
import { airportAPI } from '../services/airportService'
import { IAirport } from '../models/models'
import ReactPaginate from 'react-paginate'
import { airportSlice } from '../store/slices/airportSlice'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { airportFiltersSlice } from '../store/slices/airportFiltersSlice'

interface IProps {

}

const MainPage: React.FC<IProps> = (props) => {
  const dispatch = useAppDispatch()
  const { airportsPortion, page, searchTerm, currentType, currentRegion, currentCountry } = useAppSelector(state => state.airport)
  const { data: airports, error, isLoading } = airportAPI.useFetchAllAirportsQuery({ page, limit: airportsPortion, term: searchTerm })
  const { data: airportsCount } = airportAPI.useFetchAirportsCountQuery('')
  const [pageCount, setPageCount] = useState(0)
  const { setAirportsCount, setSelectedPage } = airportSlice.actions
  const { setTypes, setRegions, setCountries } = airportFiltersSlice.actions

  const types = airports?.map(airport => airport.type)
  const regions = airports?.map(airport => airport.region)
  const countries = airports?.map(airport => airport.country)

  useEffect(() => {
    if (types) {
      const uniqueTypes = Array.from(new Set(types))
      dispatch(setTypes(uniqueTypes))
    }
    if (regions) {
      const uniqueRegions = Array.from(new Set(regions))
      dispatch(setRegions(uniqueRegions))
    }
    if (countries) {
      const uniqueCountries = Array.from(new Set(countries))
      dispatch(setCountries(uniqueCountries))
    }
  }, [airports])

  useEffect(() => {
    if (airportsCount) {
      dispatch(setAirportsCount(airportsCount.count && airportsCount.count))
      setPageCount(airportsCount.count / airportsPortion)
    }
  }, [airportsCount?.count, page, airportsPortion])

  const handlePageClick = ({ selected }: { selected: number }) => {
    dispatch(setSelectedPage(selected + 1))
  }

  const airportsFilteredWithType = airports?.filter(airport => airport.type.includes(currentType))

  const airportsFilteredWithRegionAndType = airportsFilteredWithType?.filter(airport => airport.region.includes(currentRegion))

  const airportsFilteredWithCountryAndRegionAndType = airportsFilteredWithRegionAndType?.filter(airport => airport.country.includes(currentCountry))

  return (
    <div className='container-md mx-auto pt-5'>
      <AirportSearch />
      <AirportFilter />
      {isLoading && <p className="text-center text-lg">Loading...</p>}
      {error && <p className='text-center text-lg text-danger font-weight-bold'>Failed to load airports!</p>}
      {airportsFilteredWithCountryAndRegionAndType &&
        airportsFilteredWithCountryAndRegionAndType.length !== 0 ? airportsFilteredWithCountryAndRegionAndType
          .map((airport: IAirport) => <AirportCard key={airport.id} airport={airport} />) : <div className='text-center my-3'>
        <p className='text-2xl font-bold mb-3 text-gray-800'>Uh-oh, no airports found!</p>
        <p className='text-lg text-gray-600'>Adjust your search filters or check back later.</p>
      </div>}
      <div className='d-flex justify-content-center'>
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
    </div>
  )
}

export default MainPage