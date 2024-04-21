import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/crudSlice.js";

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((fil) => fil.id == id);
  const { name, email } = existingUser[0];
  const [upName, setUpName] = useState(name);
  const [upEmail, setUpEmail] = useState(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: upName,
        email: upEmail,
      })
    );
    navigate("/");
  };
  return (
    <>
      <h1>Edit User</h1>
      <form onSubmit={handleUpdate}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={upName}
            onChange={(e) => setUpName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="enter email"
            value={upEmail}
            onChange={(e) => setUpEmail(e.target.value)}
          />
        </div>
        <button>Update</button>
      </form>
    </>
  );
};

export default Update;
