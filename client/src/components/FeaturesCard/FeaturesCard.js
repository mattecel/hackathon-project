import './FeaturesCard.scss'

const FeaturesCard = ({img, text, copyright}) => {
    return (
        <div className='features-card'>
            <img src={img} alt='' className='features-card__img'></img>
            <p className='features-card__text'>{text}
            <span className={copyright}>TM</span>
            </p>
        </div>
    );
};

export default FeaturesCard;