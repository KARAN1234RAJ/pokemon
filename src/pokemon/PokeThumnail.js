import React from "react";
import { useState } from "react";
import "../App.css";
import { ExpandContent } from "./ExpandContent";
const PokeThumnail = ({
  id,
  name,
  type,
  image,
  height,
  weight,
  stat1,
  stat2,
  stat3,
  stat4,
  stat5,
  stat6,
  bs1,
  bs2,
  bs3,
  bs4,
  bs5,
  bs6,
}) => {
  const style = `thumb-container ${type}`;
  const [modal2Visible, setModal2Visible] = useState(false);
  const handleModalOpen = () => {
    // setModal2Visible(true)
    if (!modal2Visible) {
      setModal2Visible(true);
    }
  };
  return (
    <>
      {/* <h1>Karan Raj</h1> */}
      <div className={style}>
        <div className="number">
          <small>{id}</small>
        </div>
        <img src={image} alt={name} />
        <div className="detail-wrapper">
          <h3>{name.toUpperCase()}</h3>
          <small>Type: {type}</small>
          <br />
          <button className={`pokeinfo `} onClick={handleModalOpen}>
            Know more...
          </button>
        </div>
      </div>
      {modal2Visible === true ? (
        <ExpandContent
          visible={modal2Visible}
          setVisible={setModal2Visible}
          name={name}
          image={image}
          type={type}
          obj={{
            height,
            weight,
            stat1,
            stat2,
            stat3,
            stat4,
            stat5,
            stat6,
            bs1,
            bs2,
            bs3,
            bs4,
            bs5,
            bs6,
          }}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default PokeThumnail;
