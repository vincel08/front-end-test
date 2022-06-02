import "../styles/featured.anime.scss"

export const FeaturedAnime = () => {

  return (
    <div className="body-container">
      <div className="contents">
        <div className="title">
          <h1>Kimetsu no Yaiba</h1>
        </div>
        <div className="category">
          <img src={require("../images/starIcon.png")} alt="star" />
          <p>5.0</p>
          <p>Category: Adventure fiction, Dark fantasy, Martial Arts</p>
        </div>
        <div className="description">
          <p>Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by Koyoharu Gotouge. It follows teenage Tanjiro Kamado, who strives to become a demon slayer after his family was slaughtered and his younger sister Nezuko turned into a demon.</p>
        </div>
        <div className="play-wrapper">
          <div className="play">
            <img src={require("../images/playIcon.png")} alt="playIcon" />
            <h1>Watch Now!</h1>
          </div>
          <div className="heart">
            <img src={require("../images/heartIcon.png")} alt="heartIcon" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="movie tabs container">
          <h1>Overview</h1>
          <h1>Episodes</h1>
          <h1>Details</h1>
        </div>
      </div>
    </div>
  )
}

