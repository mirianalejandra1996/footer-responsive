// assets
import {ReactComponent as Facebook} from '../../assets/vectors/facebook-box-fill.svg';
import {ReactComponent as Instagram} from '../../assets/vectors/instagram-fill.svg';
import {ReactComponent as Linkedin} from '../../assets/vectors/linkedin-box-fill.svg';
import {ReactComponent as Youtube} from '../../assets/vectors/youtube-fill.svg';

import "./social.css"

const socials = [
  <Youtube/>,
  <Facebook/>,
  <Linkedin/>,
  <Instagram/>,
]

export const Social = () => {
  return (
    <div>
    <h1 className="title-section">Redes sociales</h1>
        <div className='container__space-around'>
            {socials.map((icon, position) => <span key={position} className='social-images'>{icon}</span>)}
        </div>
    </div>
  )
}
