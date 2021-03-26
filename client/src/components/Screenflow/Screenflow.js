import "./Screenflow.scss";
import image from "../../assets/images/googlefasttrackmock.png";

const Screenflow = () => {
  return (
    <section className="screenflow">
      <div className="text">
        <h1 className="text__title">We're with you</h1>
        <p className="text__blurb">
          We understand how difficult securing specialized hospital appointments
          can be. Fast Track is designed to help you stay on top of your health.
        </p>
      </div>
      <div className="image">
        <img className="image__image" src={image} alt="" />
      </div>
    </section>
  );
};

export default Screenflow;
