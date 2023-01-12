import "./Intro.css";
import useMediaQuery from "./mediaquery"
const Intro = () => {
  const isMobile = useMediaQuery('(min-width: 760px)');
  return (
    <div id="accueil" className="intro">
      <div style={isMobile ? { marginTop: "-40px", marginLeft:"150px", marginRight:"150px" } : null}>
      <h1>Estin bib</h1>
      <p >
        “ Estin Library is a platform that collects all the courses of the
        Graduate School of Computer and Digital Science and Technology (ESTIN)
        and that facilitates you to consult these courses in comfort, you will
        find all the TD, EMD, as well as CORRECTIONS on this virtual library
        just by clicking on the folder you are looking for.”
      </p>
      </div>
      <img className="bib" src="/estinBib.svg" />
      <img src="/estinBib_mobile.svg" className="bib_mobile" />
      <img className="vecteur" src="/vecteur.svg" />
    </div>
  );
};
export default Intro;
