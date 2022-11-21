const ActivityCard = (props) => {
  return (
    <>
      <h4>{props.name}</h4>
      
      <span>Difficulty: {props.difficulty}</span>
      <span>Season: {props.season}</span>
      <span>Start of activity: {props.start}</span>
      <span>End of activity: {props.end}</span>
    

    </>
  );
};

export default ActivityCard;