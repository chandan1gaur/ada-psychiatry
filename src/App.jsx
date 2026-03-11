import './App.css'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import MeetTheFounder from './components/MeetTheFounder'
import TreatmentFocus from './components/TreatmentFocus'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import StepsToGetStarted from './components/StepsToGetStarted'
import Locations from './components/Locations'
import FAQ from './components/FAQ'
import QuoteSection from './components/QuoteSection'
import Footer from './components/Footer'

function App() {
  const images = [
    '/images/2a07a7c8585529d7c710103b474635150518f950.png',
    '/images/b029bc51ef711d6a2be540f499ae3581a58a5da6.png',
    '/images/c13c9d13711b4d04515ebae9bb661c1e03006e2d.png',
    '/images/fd11b44da5c9f8562e5ca2c0ede8ad5cc57b079f.png'
  ]
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000) // Change image every 5 seconds
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="min-h-screen bg-cream-50 overflow-x-hidden">
      <Header />

      <main>
        {/* Hero Section */}
        <section id="home" className="relative text-white overflow-hidden" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', height: '100vh' }}>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
            style={{
              backgroundImage: `url(${images[currentImage]})`
            }}
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-60 z-5"></div>

          {/* Hero Content */}
          <div className="absolute left-4 sm:left-6 md:left-10 lg:left-14 top-[18%] sm:top-[20%] z-20 max-w-600">
            <div className=" rounded-md p-4 sm:p-5 md:p-6 max-w-[320px] sm:max-w-[360px] md:max-w-[600px]">
              <h1 className="font-wulkan-display font-semibold text-[26px] sm:text-[30px] md:text-[34px] lg:text-[36px] leading-[32px] sm:leading-[38px] uppercase text-white text-left">
                Need a mental
                <br />
                health
                <br />
                provider?
              </h1>
              <h2 className="mt-3 font-wulkan-display font-semibold text-[13px] sm:text-[14px] text-white text-left">
                No Look Further
              </h2>
              <p className="mt-2 font-playfair-display font-normal text-[12px] sm:text-[13px] leading-[18px] sm:leading-[20px] text-white text-left">
                Our goal is to provide a safe, comfortable, and warm environment so that you can openly discuss your mental health needs.
              </p>
              <button
                className="mt-4 text-black font-work-sans font-medium text-[13px] rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2 w-[150px] h-[40px] bg-gradient-to-r from-[#C18C2C] via-[#FCF38A] to-[#C18C2C]"
              >
                Learn More
                <svg width="18" height="18" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5 5L20.5 12M20.5 12L13.5 19M20.5 12H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${index === currentImage ? 'bg-white' : 'bg-white bg-opacity-50'}`}
              ></button>
            ))}
          </div>
        </section>

        <MeetTheFounder />
        <TreatmentFocus />
        <QuoteSection />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <StepsToGetStarted />
        <Locations />
        <FAQ />
      </main>

      <Footer />
    </div>
  )
}

export default App
