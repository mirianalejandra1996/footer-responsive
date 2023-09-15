// assets
import logo1 from '../../assets/imgs/logo-eccom-award-2020.png';
import logo2 from '../../assets/imgs/logo-eccom-award-2021.png';
import logo3 from '../../assets/imgs/logo-empresa-B.png';

import "./awards.css"

const images = [logo1, logo2, logo3];

export const Awards = () => {

  return (
    <div>
    <h1 className="title-section">Premios y reconocimientos</h1>
        <div className='container__space-between--awards'>
            {images.map((icon, index) => <img key={index} className='awards-images' src={icon} alt={`logo-${index}`}/>)}
        </div>
    </div>
  )
}
