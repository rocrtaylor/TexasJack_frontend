import React, { useState, useEffect } from "react";
import axios from "axios";
import Add from "./components/Add";
import Edit from "./components/Edit";

function App() {
  const [guns, setGuns] = useState([]);

  const getGuns = () => {
    axios.get("https://tjgs-backend.herokuapp.com").then(
      (response) => setGuns(response.data),
      (error) => console.error(error)
    );
  };

  const handleCreate = (addWeapon) => {
    axios.post("https://tjgs-backend.herokuapp.com/", addWeapon).then((response) => {
      console.log(response);
      setGuns([...guns, response.data]);
    });
  };

  const handleDelete = (event, deletedWeapon) => {
    axios.delete("https://tjgs-backend.herokuapp.com" + deletedWeapon.id).then((response) => {
      setGuns(guns.filter((x) => x.id !== deletedWeapon.id));
    });
  };

  const handleUpdate = (editWeapon, id) => {
    console.log(editWeapon);
    axios.put("https://tjgs-backend.herokuapp.com/" + id, editWeapon).then((response) => {
      setGuns(
        guns.map((gun) => {
          return gun.id !== editWeapon.id ? gun : response.data;
        })
      );
    });
  };

  useEffect(() => {
    getGuns();
  }, []);

  return (
    <>
      <h1>Texas Jacks Gun Shack</h1>
      <Add handleCreate={handleCreate} />
      <br />
      <div>Hello Guns</div>
      {guns.map((gun) => {
        return (
          <div key={gun.id}>
            <h2> Make: {gun.make}</h2>
            <h3> Model: {gun.model}</h3>
            <h3> Caliber: {gun.caliber}</h3>
            <h3> Price: ${gun.price}</h3>
            <Edit handleUpdate={handleUpdate} gun={gun} />
            <button onClick={(event) => handleDelete(event, gun)} value={gun.id}>
              X
            </button>
          </div>
        );
      })}
    </>
  );
}

export default App;
