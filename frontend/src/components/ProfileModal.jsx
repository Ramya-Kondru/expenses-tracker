import "../styles/ProfileModal.css";

function ProfileModal({ user, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="profile-modal">

        <h2>My Profile</h2>

        <div className="profile-details">
          <p><strong>Name :</strong> {user?.name}</p>
          <p><strong>Email :</strong> {user?.email}</p>
        </div>

        <button className="close-btn" onClick={onClose}>
          Close
        </button>

      </div>
    </div>
  );
}

export default ProfileModal;