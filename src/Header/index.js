const Header = ({name, aboutMe}) => {
  return (
    <div>
      <p>
        <b>This is</b>
      </p>
      <h1>{name}</h1>
<p>{aboutMe}</p>
<button>Hire me</button>
    </div>
  );
};

export default Header;
