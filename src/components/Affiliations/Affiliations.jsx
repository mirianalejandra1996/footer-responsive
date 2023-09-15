
// assets
import logo1 from '../../assets/imgs/iab-peru.png'

const images = [logo1];

export const Affiliations = () => {

  return (
    <div>
    <h1 className="title-section">Afiliaciones</h1>
        <div className='container__center'>
            {images.map((icon, index) => <img key={index} src={icon} alt={`logo-${index}`}/>)}
        </div>
    </div>
  )
}
