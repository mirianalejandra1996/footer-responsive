// assets
import logo1 from '../../assets/imgs/google-marketing-platform.png';
import logo2 from '../../assets/imgs/google-cloud.png';
import logo3 from '../../assets/imgs/salesforce.png';
import logo4 from '../../assets/imgs/aws.png';
import logo5 from '../../assets/imgs/hubspot.png';

import "./partners.css"


const imagesTopMobile = [logo1, logo2];
const imagesBottomMobile = [logo3, logo4, logo5];

const imagesTopDesktop = [logo1, logo2, logo3];
const imagesBottomDesktop = [logo5, logo4];

export const Partners = () => {

  return (
    <div>
    <h1 className="title-section">Somos partners</h1>
        <div className='partners__main-container--mobile'>
          <div className='container__space-between'>
              {imagesTopMobile.map((icon, index) => <img key={index} src={icon} alt={`logo-${index}`}/>)}
          </div>

          <div className='container__space-around--partners'>
              {imagesBottomMobile.map((icon, index) => <img key={index} src={icon} alt={`logo-${index}`}/>)}
          </div>
        </div>

        <div className='partners__main-container--desktop'>
          <div className='container__space-between'>
              {imagesTopDesktop.map((icon, index) => <img key={index} className='partners-images' src={icon} alt={`logo-${index}`}/>)}
          </div>

          <div className='container__space-around'>
              {imagesBottomDesktop.map((icon, index) => <img key={index} className='partners-images' src={icon} alt={`logo-${index}`}/>)}
          </div>
        </div>
    </div>
  )
}
