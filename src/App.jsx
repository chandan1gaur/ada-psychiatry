import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
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
  return (
    <div className="min-h-screen bg-cream-50 overflow-x-hidden">
      <Header />

      <main>
        <Hero />

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
