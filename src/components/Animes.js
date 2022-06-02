import "../styles/hover.components.scss"
import "../styles/animes.scss"

import react from "react"
import { useState } from "react"
import { SelectedAnime } from "./Selected.anime"
import { TrendingAnimesDatas } from "../data/TrendingAnimeDatas"
import { ThrowbackAnimesDatas } from "../data/ThrowbackAnimeDatas"

export const Animes = () => {

  const [currentContent, setCurrentContent] = useState(true)

  const onClick = () => {
    setCurrentContent(false)
  }

  const back = () => {
    setCurrentContent(true)
  }

  const trendingAnimesElements = TrendingAnimesDatas.map(anime =>
    <react.Fragment key={anime.id}>
      <div
        className={anime.isContent ? "with--content" : "without--content"}
        style={{ backgroundImage: `url(${anime.image})`, borderRadius: "21px" }}
        onClick={anime.isContent ? onClick : undefined}
      >
        <div className="anime--title">
          <h1>{anime.title}</h1>
        </div>

        <div className="anime--detail">
          <p className="description">{anime.description}</p>
          <div className="rating">
            <img src={require("../images/starIcon.png")} alt="star" />
            <p className="rating">{anime.rating}</p>
          </div>
        </div>
      </div>
    </react.Fragment>
  )

  const throwbackAnimeElements = ThrowbackAnimesDatas.map(anime =>
    <react.Fragment key={anime.id}>
      <div
        className="throwback--anime"
        style={{ backgroundImage: `url(${anime.image})` }}
      >
      </div>
    </react.Fragment>
  )

  return (
    <>
      {currentContent ?
        <div className="animes--container">
          <div className="title--container">
            <h1>
              Trending <span>this week</span>
            </h1>
          </div>
          <div className="trending--animes--container">
            {trendingAnimesElements}
          </div>
          <div className="title--container">
            <h1>
              Throwback Anime!
            </h1>
          </div>
          <div className="throwback--animes--container">
            {throwbackAnimeElements}
          </div>
        </div>
        :
        <>
          <div className="return" >
            <h1 onClick={back}>Back</h1>
          </div>
          <div className="title--container">
            <h1>
              Trending <span>this week</span>
            </h1>
          </div>
          <SelectedAnime />
        </>
      }
    </>
  )
}
