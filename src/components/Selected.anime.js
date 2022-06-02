import "../styles/selected.anime.scss"

export const SelectedAnime = () => {
  return (
    <div className="selected--anime--container">
      <div className="selected--anime--details">
        <div className="anime--image--cover">
          <div className="title--container">
            <h1>Attack On Titan</h1>
          </div>
          <div className="details">
            <div className="genre">
              <p>Category: Adventure fiction, Dark fantasy, Martial Arts</p>
            </div>
            <div className="rating">
              <img src={require("../images/starIcon.png")} alt="star" />
              <p>5.0</p>
            </div>
          </div>
        </div>
        <div className="story--summary--container">
          <p>When man-eating Titans first appeared 100 years ago, humans found safety behind massive walls that stopped the giants in their tracks. But the safety they have had for so long is threatened when a colossal Titan smashes through the barriers, causing a flood of the giants into what had been the human…</p>
        </div>
      </div>
      <div className="episodes--container">
        <div className="header--wrapper">
          <h1>Episodes</h1>
          <h1>Season 1</h1>
        </div>
        <div className="episodes">
          <img src={require("../images/image1.png")} alt="cover" />
          <div className="description--container">
            <h1>Episode 1</h1>
            <p>The citizens worry they will be at the Titans' mercy after many years of peace.</p>
          </div>
        </div>
        <div className="episodes">
          <img src={require("../images/image3.png")} alt="cover" />
          <div className="description--container">
            <h1>Episode 2</h1>
            <p>The Shiganshina citizens are under attack from the Titans.</p>
          </div>
        </div>
        <div className="episodes">
          <img src={require("../images/image5.png")} alt="cover" />
          <div className="description--container">
            <h1>Episode 3</h1>
            <p>Eren butt heads with Jean Kirschtein, a cadet who wants to be in the Military Police Regiment. Berholt and Reiner help Eren learn during training.</p>
          </div>
        </div>
      </div>
    </div>
  )
}