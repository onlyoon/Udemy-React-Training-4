import { useState } from "react";
import "./UserForm.css";
import Warning from "./Warning";

const UserForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isOpen, setOpen] = useState(false);

  const nameInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setOpen(false);
    }
    setEnteredName(event.target.value);
  };

  const ageInputChangeHandler = (event) => {
    if (
      event.target.value.trim().length > 0 ) {
      setOpen(false);
    }
    setEnteredAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length == 0 || enteredAge.trim().length == 0) {
      setOpen(true);
      console.log(isOpen);
      return;
    } else {
      console.log(isOpen);
      const addUser = (
        enteredName +
        " (" +
        enteredAge +
        "years old)"
      ).toString();
      props.onAddUser(addUser);
    }
  };

  const handleModalCancel = () => setOpen(false);

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label>UserName</label>
        <input type="text" onChange={nameInputChangeHandler} />
        <label>Age</label>
        <input type="text" onChange={ageInputChangeHandler} />
        <button type="submit">Add User</button>
        {isOpen == true ? (
          <Warning isOpen={isOpen} onCancel={handleModalCancel} />
        ) : (
          <></>
        )}
      </div>
    </form>
  );
};

export default UserForm;
