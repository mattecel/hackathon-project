import './Hero.scss';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero__card'>
                <span className='hero__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
                <div className='hero__cta'>
                <button className='hero__button'>Google</button>
                <button className='hero__button'>Apple</button>
                </div>
            </div>
            <img className='hero__img'>
            </img>
        </div>
    );
};

export default Hero;