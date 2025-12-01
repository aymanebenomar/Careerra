import React from 'react'
import Banner from '../components/home/Banner'
import Hero from '../components/home/Hero'
import Navbar from '../components/home/Navbar'
import Features from '../components/home/Features'
import Testimonial from '../components/home/Testimonial'
import Faq from '../components/home/Faq'
import Footer from '../components/home/Footer'




const Home = () => {
  return (
	<div>
		<Banner />
		<Navbar />
		<Hero />
		<Features />
		<Testimonial />
		<Faq />
		<Footer />
	</div>
  )
}

export default Home