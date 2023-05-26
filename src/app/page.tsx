import '../../styles/global.css'
import { HomePage } from './components/home'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 border-black text-2xl text-black">
      <HomePage/>
    </main>
  )
}
