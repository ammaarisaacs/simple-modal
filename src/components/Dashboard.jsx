import React, { useEffect, useState, Component } from "react";
import Modal from "./Modal";

const Dashboard = () => {
  const [show, setShow] = useState(false);

  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  //cannot put console log in handleOpen, since useState is asynchronous and won't have the value yet, therefore use useEffect
  useEffect(() => {
    console.log(`Modal Open: ${show}`);
  }, [show]);

  return (
    <>
      <h1>React Modal</h1>
      <Modal show={show} handleClose={handleClose}>
        <p>Can put a whole lot of info over here</p>
      </Modal>
      <button type="button" onClick={handleOpen}>
        Open
      </button>
    </>
  );
};

export default Dashboard;
