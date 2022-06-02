import "../styles/hover.components.scss"
import { useState } from "react"
import { HoverComponentsDatas } from "../data/Hover.components.datas"

export const HoverComponents = () => {
  return (
    <>
      <div className="hover--components--container">
        {HoverComponentsDatas.map((item) =>
          <div className="hover--components" key={item.toString()} style={{ backgroundImage: `url(${item})`, backgroundRepeat: "no-repeat" }}>
          </div>)}
      </div>
    </>
  )
}