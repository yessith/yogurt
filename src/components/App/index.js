import { Header } from 'components/Header'
import { Hero } from 'components/Hero'
import { MainLayout } from 'components/MainLayout'
import { Nutritional } from 'components/Nutritional'

export function App() {
  return (
    <>
      <Header />
      <MainLayout>
        <Hero />
        <Nutritional />
      </MainLayout>
    </>
  )
}
