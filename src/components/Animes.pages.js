import "../styles/animes.scss"
import { useState } from "react"
import { SelectedAnime } from "./SelectedAnime"
import { AnimesList } from "./Animes.list"

export const AnimesPages = () => {

  const [currentContent, setCurrentContent] = useState(true)

  return (
    <div className="animes--container">
      <div className="title-container">
        <h1>
          Trending <span>this week</span>
        </h1>
      </div>
      {currentContent ? <AnimesList/> : <SelectedAnime />}
    </div>
  )
}