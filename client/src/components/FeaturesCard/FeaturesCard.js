import './FeaturesCard.scss'

const FeaturesCard = ({img, text}) => {
    return (
        <div className='features-card'>
            <img src={img} alt='' className='features-card__img'></img>
            <p className='features-card__text'>{text}</p>
        </div>
    );
};

export default FeaturesCard;