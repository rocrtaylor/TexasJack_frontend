import React, { useState } from "react";

const Edit = (props) => {
  // let emptyWeapon = { id: props.id, make: "make", model: "model", caliber: "caliber", price: "price" };
  let emptyWeapon = { ...props.gun };
  const [weapon, setWeapon] = useState(emptyWeapon);

  const handleChange = (event) => {
    setWeapon({ ...weapon, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event, id) => {
    event.preventDefault();
    props.handleUpdate(weapon, id);
  };

  return (
    <>
      <form
        onSubmit={(event) => {
          handleSubmit(event, props.gun.id);
        }}
      >
        <label htmlFor="make">Make: </label>
        <input type="text" name="make" value={weapon.make} onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="model">Model: </label>
        <input type="text" name="model" value={weapon.model} onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="caliber">Caliber: </label>
        <input type="number" name="caliber" value={weapon.caliber} onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="price">Price: </label>
        <input type="number" name="price" value={weapon.price} onChange={handleChange} />
        <input type="submit" />
      </form>
    </>
  );
};

export default Edit;
