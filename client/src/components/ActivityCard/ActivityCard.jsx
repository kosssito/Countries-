const ActivityCard = (props) => {
  return (
    <>
      <p>name: {props.name}</p>
      <p>difficulty: {props.difficulty}</p>
      <p>season: {props.season}</p>
      <p>duration: {props.duration}</p>

    </>
  );
};

export default ActivityCard;