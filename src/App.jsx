import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardCarousel from './components/CardCarousel'
import FactCard from './components/FactCard'

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
      <button className='login'>Iniciar Sesion</button>
      </header>
      <main>
        <section className='hero'>
          <div className='bottle'></div>
          <div className='superficie'></div>
          <h1>Conéctate con la fuerza del océano en cada sorbo</h1>
          <button>Convierte en distribuidor</button>
        </section>
        <section className='factos_section'>
          <FactCard iconUrl="images/factos/mountain-white.png"  text="Alta pureza y minerales esenciales" />
          <FactCard iconUrl="images/factos/water-white.png" text="Electrolitos 100% naturales" />
          <FactCard iconUrl="images/factos/ph-white.png" text="Ph perfectamente balanceado" />
        </section>
        <section className='products'>
          <CardCarousel />
        </section>
        <section className='aboutus_section'>
          <h2>Un Legado de Pureza y Fuerza</h2>
          <p>El Corsario nace en las costas portuarias, donde la inmensidad del mar nos inspira a crear un agua tan pura como sus olas y tan fuerte como sus corrientes. Desde nuestros inicios, hemos llevado a cabo un compromiso inquebrantable: ofrecer agua de calidad superior que combine la esencia del mar con tecnología de purificación de última generación.</p>
          <iframe src="https://www.youtube.com/embed/-PDnOqKFh9s?si=pWtwM0BQlwQxYjKV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
        </section>
        <section className='compromises_section'>
          <div className='compromises_section__image_1'></div>
          <div className='content'>
            <h2>Nuestro Compromiso con la Calidad</h2>
            <p>La calidad no es una opción, es un estándar. Nuestro proceso de purificación incluye:
            </p>
            <ul>
              <li>Filtración múltiple para eliminar impurezas.</li>
              <li>Control de calidad riguroso en cada etapa de producción.</li>
              <li>Certificaciones que garantizan un agua de confianza.</li>
            </ul>
          </div>
        </section>
        <section className='compromises_section'>
        <div className='compromises_section__image_2'></div>     
        <div className='content'>
            <h2>Sostenibilidad</h2>
            <p>Nuestro compromiso con el medio ambiente es tan fuerte como nuestras raíces. 
            </p>
            <ul>
              <li>Promovemos el reciclaje de botellas.</li>
              <li>Implementamos procesos sostenibles en nuestras plantas.</li>
              <li>Trabajamos con comunidades portuarias para cuidar los recursos naturales.</li>
            </ul>
          </div>
        </section>
        <section className='joinus_section'>
          <div className='joinus_section__content'>
            <h2>Únete a Nosotros</h2>
            <p>¡Conviértete en Distribuidor!
            Forma parte de nuestra red de distribuidores y lleva la fuerza y pureza de El Corsario a más personas.</p>
          </div>
          <button>LLenar formulario</button>
        </section>
      </main>
      <footer>
        a
      </footer>
    </>
  )
}

export default App
