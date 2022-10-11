import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={480}
    viewBox="0 0 280 480"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="136" cy="126" r="125" /> 
    <rect x="0" y="266" rx="15" ry="15" width="280" height="24" /> 
    <rect x="0" y="313" rx="15" ry="15" width="280" height="89" /> 
    <rect x="0" y="432" rx="15" ry="15" width="128" height="30" /> 
    <rect x="171" y="421" rx="25" ry="25" width="108" height="45" />
  </ContentLoader>
)

export default Skeleton
