function NavBar({handleClickS, handleClickP, buttonPOff, buttonSOff}) {
  return (
    <>
      <button onClick={handleClickP} disabled={!buttonPOff}>
        Précedent
      </button>
      <button onClick={handleClickS} disabled={!buttonSOff}>
        Suivant
      </button>
    </>
  );
}

export default NavBar;
