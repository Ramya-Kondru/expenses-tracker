import "../styles/LogoutModal.css";

function LogoutModal({ onConfirm, onCancel }) {
  return (
    <div className="modal-overlay">

      <div className="logout-modal">

        <h2>Logout</h2>

        <p>Are you sure you want to logout?</p>

        <div className="logout-buttons">

          <button className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>

          <button className="logout-btn" onClick={onConfirm}>
            Logout
          </button>

        </div>

      </div>

    </div>
  );
}

export default LogoutModal;