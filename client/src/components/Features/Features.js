import './Features.scss';
import FeaturesCard from '../FeaturesCard/FeaturesCard';

const Features = () => {
    return (
        <div className='features'>
            <h2 className='features__heading'>"HOW DOES IT WORK?"</h2>
            <div className='features__card-container'>
                <FeaturesCard/>
                <FeaturesCard/>
                <FeaturesCard/>
            </div>
        </div>
    );
};

export default Features;