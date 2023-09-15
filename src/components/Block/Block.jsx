import "./block.css";

export const Block = ({title, options, blockClass}) => {

  return (
    <div className={`${blockClass}`}>
      <div className="dropdown__row">
        <h1 className="dropdown__title">
          {title}
        </h1>
      </div>
      
      <div className="dropdown__content">
      { options.map( (option, index) => <p key={index} className="dropdown__option">{option}</p>)}
      {/* { options.map( (option, index) => <p key={index} className={`dropdown__option ${blockClass}`}>{option}</p>)} */}
        </div>
    </div>
  );
};
