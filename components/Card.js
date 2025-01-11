import { CARD_IMG1, CARD_IMG2, CDN_URL } from "./constant";
const Card = (props) => {
    const cardData = props.resData;
    // console.log(CDN_URL + cardData.info.cloudinaryImageId);
    return (
        <div className="card-list">
            <div className="card-container">
                <img className="card-img" src={CARD_IMG1} alt="card-image" />
                <div className="card-content">
                    <h2>{cardData.info.name}</h2>
                    <h3>{cardData.info.costForTwo}</h3>
                    <h3>{cardData.info.avgRating}</h3>
                </div>
            </div>
        </div>
    )
}
export default Card;