import { Header } from 'components/Header'
import { Hero } from 'components/Hero'
import { MainLayout } from 'components/MainLayout'

export function App() {
  return (
    <>
      <Header />
      <MainLayout>
        <Hero />
      </MainLayout>
    </>
  )
}
