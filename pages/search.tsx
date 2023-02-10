import { format } from 'date-fns'
import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import InfoCard from '../components/infoCard'
import { Results } from '../typings'

interface Props {
  searchResults: Results[]
}

function Search({ searchResults }: Props) {
  const router = useRouter()
  const { location, startDate, endDate, noOfGuests } = router.query

  // const formattedStartDate =
  //   startDate && format(new Date(startDate), 'dd MMMM yy')
  // const formattedEndDate = endDate && format(new Date(endDate), 'dd MMMM yy')
  // const range = `${formattedStartDate} - ${formattedEndDate}`

  return (
    <div>
      <Header
        placeholder={`${location} | ${noOfGuests} 
      guests`}
      />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">300+ Stays - for {noOfGuests} guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            {' '}
            Stays in {location}
          </h1>

          <div
            className="hidden lg:inline-flex mb-5 space-x-3
          text-gray-800 whitespace-nowrap"
          >
            <p className="button"> Cancellation Flexibility</p>
            <p className="button"> Type of Place</p>
            <p className="button"> Price</p>
            <p className="button"> Rooms & Beds</p>
            <p className="button"> More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={title}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Search

export async function getServerSideProps() {
  const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS').then(
    res => res.json()
  )

  return {
    props: {
      searchResults
    }
  }
}
