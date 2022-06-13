import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { Hero } from 'components/Hero'
import { MainLayout } from 'components/MainLayout'
import { Nutritional } from 'components/Nutritional'
import { Products } from 'components/Products'

export function App() {
  return (
    <>
      <Header />
      <MainLayout>
        <Hero />
        <Nutritional />
        <Products />
      </MainLayout>
      <Footer />
    </>
  )
}
