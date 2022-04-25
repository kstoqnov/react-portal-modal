import { useState } from "react";
import PortalModal from "./components/PortalModal";
import "./css/App.css";

const App = () => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <div className="container">
      <div className="button-container">
        <button className="button" onClick={handleOpenModal}>
          Open Modal
        </button>
      </div>

      <div>
        <PortalModal
          message="Hello Portal World!"
          isOpen={open}
          onClose={handleCloseModal}
        />
      </div>
    </div>
  );
};

export default App;
