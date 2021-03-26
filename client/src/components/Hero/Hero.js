import './Hero.scss';
import fastTrackLogo from '../../assets/fasttracklogo.svg';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero__card'>
                <div className = "hero__heading">
                    <img className='hero__logo' src={fastTrackLogo}/>
                    <h1 className='hero__title'> Fast Track</h1>
                </div>
                <span className='hero__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
                <div className='hero__cta'>
                <span className='hero__button hero__button--google'></span>
                <span className='hero__button hero__button--apple'></span>
                </div>
            </div>
            <img className='hero__img'>
            </img>
        </div>
    );
};

export default Hero;