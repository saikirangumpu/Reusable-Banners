// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerItems} = props
  const {headerText, description, className} = bannerItems

  return (
    <li className={`card-item ${className}`}>
      <div>
        <h1 className="title"> {headerText} </h1>
        <p className="description"> {description} </p>
        <button className="button"> Show More </button>
      </div>
    </li>
  )
}

export default BannerCardItem
