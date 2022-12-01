import { LoginPage } from "../../components";
import "../../assets/css/home.css";
import { CardSVG } from "../../assets/icon/CardSVG/CardSVG";
export const Home = () => {
  return (
    <div className="mainContainer">
      <LoginPage />
      <div className="cardSection">
        <div style={{ position: "absolute", right: 180, top: 200 }}>
          <CardSVG height={500} width={550} />
        </div>
      </div>
    </div>
  );
};
