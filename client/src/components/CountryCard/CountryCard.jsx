


const CountryCard = (props) => {
  return (
    <>
      <img src={props.flag} alt="img-country" width={200} height={100} />
      <h1>{props.name}</h1>
      <p>{props.continent}</p>

    </>
  );
};

export default CountryCard;