import './Banner.scss';

const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner__div'>BOTTOM BANNER</div>
            <div className='banner__cta'>
                {/* Use same buttons on hero */}
                <button className='hero__button'>Apple</button>
                <button className='hero__button'>Google</button>
            </div>
            
        </div>
    );
};

export default Banner;