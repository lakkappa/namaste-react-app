import { CARD_IMG1, CARD_IMG2, CDN_URL } from "./constant";
const Card = (props) => {
    const cardData = props.resData;
    // console.log(CDN_URL + cardData.info.cloudinaryImageId);
    return (
        <div className="card-list">
            <div className="card-container">
                <img className="card-img" src={CDN_URL + cardData.info.cloudinaryImageId} alt="card-image" />
                <div className="card-content">
                    <h3>{cardData.info.name}</h3>
                    <h4>{cardData.info.costForTwo}</h4>
                    <h4>{cardData.info.avgRating}</h4>
                </div>
            </div>
        </div>
    )
}
export default Card;