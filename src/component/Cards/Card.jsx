import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <img src={props.icon} alt={props.alt} width={40} height={40} />
        <h3>{props.title}</h3>
      </div>
    </div>
  );
};

export default Card;
