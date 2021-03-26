import './Features.scss';
import FeaturesCard from '../FeaturesCard/FeaturesCard'; //8, 7, 5
import featOne from '../../assets/images/feat-8.png';
import featTwo from '../../assets/images/feat-7.png';
import featThree from '../../assets/images/feat-5.png';

const Features = ({heading, display}) => {
    if(!(display)) {
    return (
        <div className='features'>
            <h2 className='features__heading'>{heading}</h2>
            <div className='features__card-container'>
                <FeaturesCard text='Get alerted for last minute appointments' img={featOne}/>
                <FeaturesCard text='Get alerted for last minute appointments' img={featTwo}/>
                <FeaturesCard text='Get alerted for last minute appointments' img={featThree}/>
            </div>
        </div>
    );
    } else {
        return (
        <div className='features'>
        <h2 className='features__heading'>{heading}</h2>
        <div className='features__card-container'>
            <FeaturesCard text='' img=''/>
            <FeaturesCard text='' img=''/>
            <FeaturesCard text='' img=''/>
        </div>
    </div>
        );
    }
};

export default Features;