import { useState } from 'react'
import './App.css'
import HeroSection from './views/home/HeroSection';
import PropsSection from './views/home/PropsSection';
import ProductsSection from './views/home/ProductsSection';
import AboutUsSection from './views/home/AboutUsSection';
import CompromisesSection from './views/home/CompromisesSection';
import JoinUsSection from './views/home/JoinUsSection';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
      <span></span>
      <ul>
        <li>Productos</li>
        <li>Nosotros</li>
        <li>Compromisos</li>
        <li>Distribución</li>
      </ul>
      </header>
      <main>
        <HeroSection />
        <PropsSection />
        <ProductsSection />
        <AboutUsSection />
        <CompromisesSection />
        <JoinUsSection />
      </main>
      <footer>
        
      </footer>
    </>
  )
}

/*

        <CompromisesSection />
        <JoinUsSection />
*/

export default App
