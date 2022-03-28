import React, { useState, useEffect } from "react";

const Add = (props) => {
  // let emptyWeapon = { id: props.id, make: "make", model: "model", caliber: "caliber", price: "price" };
  let emptyWeapon = { ...props.weapon };
  const [weapon, setWeapon] = useState(emptyWeapon);

  const handleChange = (event) => {
    setWeapon({ ...weapon, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleCreate(weapon);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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

export default Add;
