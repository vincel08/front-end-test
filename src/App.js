import "./styles/main.scss"
import { FeaturedAnime } from "./components/Featured.anime"
import { Navbar } from "./components/Navbar"
import { Animes } from "./components/Animes"

export const App = () => {

  return (
    <div className="App">
      <Navbar />
      <FeaturedAnime />
      <Animes />
    </div>
  )
}

