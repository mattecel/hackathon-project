import './Banner.scss';


const Banner = () => {
    return (
        <div className='banner'>
            <div className = 'banner__top'>
                <div className="banner__logo" ></div>
                <span className='banner__text'>Get Fast Tracked on Android and iOS</span>
            </div>
            <div className='banner__cta'>
                <span className='banner__button banner__button--google'></span>
                <span className='banner__button banner__button--apple'></span>
            </div>
            
        </div>
    );
};

export default Banner;