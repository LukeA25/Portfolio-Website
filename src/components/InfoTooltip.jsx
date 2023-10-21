import { Tooltip } from "react-tooltip";

const InfoTooltip = ({ text, children }) => {
  let randomId = Math.random().toString(36).slice(-8);

  return (
    <>
      <div data-tooltip-id={randomId} data-tooltip-content={text}>
        {children}
      </div>
      <Tooltip id={randomId} place="top" />
    </>
  );
};

export default InfoTooltip;
