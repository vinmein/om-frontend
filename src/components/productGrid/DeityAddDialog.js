import React, { cloneElement, Fragment, ReactElement, useState } from "react";
import Modal from "../modal/Modal";



const DeityAddDialog = ({
  handle,
  children,
}) => {
  const [open, setOpen] = useState(false);

  const toggleDialog = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      {cloneElement(handle, { onClick: toggleDialog })}

      <Modal open={open} onClose={toggleDialog}>
        {children}
      </Modal>
    </Fragment>
  );
};

export default DeityAddDialog;
