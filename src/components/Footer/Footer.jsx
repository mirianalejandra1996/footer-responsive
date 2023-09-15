
// assets
import neoLogo from '../../assets/imgs/neo.png';
import book from '../../assets/imgs/libro.png';

import "./footer.css"

export const Footer = () => {
  return (
    <footer>
      <div className="section">
        <hr className='footer__line'/>
        
          <div className='footer__inner-container'>
            <img src={neoLogo} alt="neo-logo"/>

            <p className='footer__text--desktop'>© 2022 NEO Consulting - Todos los derechos reservados | Política de privacidad | Terminos de uso | Politica de Cookies</p>

            <img src={book} alt="book"/>
          </div>

          <p className='footer__text--mobile'>© 2022 NEO Consulting - Todos los derechos reservados | Política de privacidad | Terminos de uso | Politica de Cookies</p>

      </div>
    </footer>
  )
}
