import { useState } from 'react';
import answers from "./answers";
import "./MagicEightBall.css";

function shakeBall(arr) {
  const random = Math.floor(Math.random() * arr.length);
  return arr[random];
};

function MagicEightBall(props) {

  const [msg, setMsg] = useState("Think of a Question");
  const [color, setColor] = useState("black");
  // const [opacity, setOpacity] = useState("fade-in");

  function handleClick() {
    const { msg, color } = shakeBall(props.answers);
    // setOpacity("fade-out");
    setMsg(msg);
    setColor(color);
    // setOpacity("fade-in");
    // setInterval(() => {
    // }, 1000);
  };

  return (
    <>
      <div
        className="MagicEightBall"
        style={{ backgroundColor: color }}
      >
        {/* <b className={'MagicEightBall-msg' + " " + `${opacity}`
        }>{msg}</b> */}
        <b className={'MagicEightBall-msg'}>{msg}</b>
      </div>
      <button
        className="MagicEightBall-button"
        onClick={handleClick}>
        Shake the Magic EightBall
      </button>
    </>
  )

};

MagicEightBall.defaultProps = { answers };

export default MagicEightBall;