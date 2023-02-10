import { useState } from "react";
import "./styles.css";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

export default function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (enteredText) => {
    setUserList((pervUsers) => {
      const updatedUsers = [...pervUsers];
      updatedUsers.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedUsers;
    });
  };

  return (
    <div className="App">
      <section>
        <UserForm onAddUser={addUserHandler} />
      </section>
      <section>
        <UserList items={userList} />
      </section>
    </div>
  );
}
