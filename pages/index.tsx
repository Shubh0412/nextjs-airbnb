import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import Banner from '../components/banner'
import { Cards, Collection } from '../typings'
import SmallCard from '../components/smallCard'
import MediumCard from '../components/mediumCard'
import LargeCard from '../components/largeCard'
import Footer from '../components/footer'
import { motion } from 'framer-motion'

interface Props {
  exploreData: Collection[]
  cardsData: Cards[]
}

const Home = ({ exploreData, cardsData }: Props) => {
  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header placeholder={''} />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        {/* 1st section */}
        <motion.section
          className="pt-6"
          initial={{
            opacity: 1,
            scale: 0
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.8,
            delay: 0.8
          }}
        >
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          <div
            className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3
          xl:grid-cols-4"
          >
            {exploreData?.map(item => (
              <SmallCard
                key={item.distance}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </motion.section>

        {/* 2nd section */}
        <section>
          <h2 className="text-4xl font-semibold py-8 pb-5">Live Anywhere</h2>
          <h5 className="text-gray-300 pb-0">Scroll Right</h5>

          <div
            className="flex space-x-3 overflow-scroll scrollbar-hide
          p-3 -ml-3"
          >
            {cardsData?.map(item => (
              <MediumCard key={item.title} img={item.img} title={item.title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then(
    res => res.json()
  )

  const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT').then(res =>
    res.json()
  )

  return {
    props: {
      exploreData,
      cardsData
    }
  }
}
