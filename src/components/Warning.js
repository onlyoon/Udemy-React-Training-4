import ReactModal from "react-modal";
import "./Warning.css";

const Warning = ({ isOpen, onCancel }) => {
  const buttonHandler = () => {
    onCancel();
  };

  return (
    <ReactModal isOpen={isOpen}>
      <div>Please Put Your UserName & Age</div>
      <button onClick={buttonHandler}>Close</button>
    </ReactModal>
  );
};

export default Warning;
