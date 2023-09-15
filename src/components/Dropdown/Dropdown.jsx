import {ReactComponent as Arrow} from '../../assets/vectors/vector.svg';
import "./dropdown.css";

export const Dropdown = ({title, options, isOpened, handleSetDropdown, position}) => {

  return (
    <div className="dropdown">
      <div onClick={() => handleSetDropdown(position)} className="dropdown__row">
        <h1 className="dropdown__title">
          {title}
        </h1>
        <span className={`dropdown__arrow ${ isOpened ? 'active' : ''}`}><Arrow/></span>
      </div>
      
      { !isOpened && <hr className='dropdown__line'/>} 
      {isOpened  && (
        <>
          <div className="dropdown__content">
            { options.map( (option, index) => <p key={index} className="dropdown__option">{option}</p>)}
        </div>
        </>
        
      )}
    </div>
  );
};
