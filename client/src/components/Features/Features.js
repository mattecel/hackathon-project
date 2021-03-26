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
                <FeaturesCard text='Get alerted when your appointment gets bumped up' img={featOne}/>
                <FeaturesCard text='Confirm your appointment and get fast tracked' img={featTwo}/>
                <FeaturesCard text='Use our maps to get to your local hospital on time' img={featThree}/>
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