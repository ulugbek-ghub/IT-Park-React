const Hellochild = ({ name, profession, age, userImage }) => {
  return (
    <div className="hello-child">
      <img src={`/${userImage}`} alt={name} />
      <h2>Salom, {name}</h2>
      <p>Professionali: {profession}</p>
      <p>Yosh: {age}</p>
    </div>
  );
};

export default Hellochild;