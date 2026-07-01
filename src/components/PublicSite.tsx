import Header from './Header'
import Hero from './Hero'
import Services from './Services'
import About from './About'
import Footer from './Footer'

export default function PublicSite() {
  return (
    <div className="min-h-screen bg-base">
      <Header />
      <Hero />
      <Services />
      <About />
      <Footer />
    </div>
  )
}
