const ActivityCard = (props) => {
  return (
    <>
      <p>Name: {props.name}</p>
      <p>Difficulty: {props.difficulty}</p>
      <p>Season: {props.season}</p>
      <p>Start of activity: {props.start}</p>
      <p>End of activity: {props.end}</p>
      

    </>
  );
};

export default ActivityCard;