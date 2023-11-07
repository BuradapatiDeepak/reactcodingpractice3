// Write your code here.

import './index.css'

const BannerCardItem = props => {
  const {BannerCards} = props
  const {headerText, description, className} = BannerCards
  return (
    <li className={className}>
      <div className="container">
        <h1 className="heading">{headerText}</h1>
        <p>{description}</p>
        <button className="button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
