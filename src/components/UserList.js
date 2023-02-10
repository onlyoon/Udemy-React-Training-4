import UserItem from "./UserItem";
import "./UserList.css";

const UserList = (props) => {
  return (
    <ul>
      {props.items.map((user) => (
        <UserItem key={user.id} id={user.id}>
          {user.text}
        </UserItem>
      ))}
    </ul>
  );
};

export default UserList;
