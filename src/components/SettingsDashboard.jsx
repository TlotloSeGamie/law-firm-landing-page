import React, { useState } from "react";
import "./SettingsDashboard.css";
import { Trash2 } from "lucide-react";
import avatar from "../assets/Ellipse 61.png";

const Settings = () => {
  const [showNote, setShowNote] = useState(false);
  const [avatarImage, setAvatarImage] = useState(avatar);
  const [activeTab, setActiveTab] = useState("profile");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatarImage(imageUrl);
    }
  };

  const handleRemove = () => {
    setAvatarImage(avatar);
  };


  return (
    <div className="settings-main">
      <div className="settings-container">
        <h1>Settings</h1>
        <div>
      <div className="preference-btns">
        <button
          className={`profile-btn ${activeTab === "profile" ? "active" : ""}`}
          onClick={() => setActiveTab("profile")}
        >
          Profile
        </button>
        <button
          className={`preference-btn ${activeTab === "preference" ? "active" : ""}`}
          onClick={() => setActiveTab("preference")}
        >
          Preferences
        </button>
      </div>

      {activeTab === "preference" && (
        <div className="preference-content">
          <h3>Preferences</h3>
          <p>This is preferences.</p>
        </div>
      )}
    </div>
        
        <div className="profile-update">
          <div className="profile-update-text">
            <h4>
              Profile<p>View and update your account details</p>
            </h4>
          </div>
          <button className="edit-profile-btn">Edit profile</button>
        </div>

        <div className="updating-profile">
          <div className="name-email">
            <div>
              <label htmlFor="name">Full Names</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Full Names"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Enter email"
                required
              />
            </div>
          </div>

          <div className="avatar">
      <h5>Avatar</h5>
      <div className="avatar-btns">
        <img src={avatarImage} alt="avatar" />
        <label className="change-btn">
          Change
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </label>
        <button className="remove-btn" onClick={handleRemove}>
          <Trash2 className="icon" />
          Remove
        </button>
      </div>
    </div>

          <div className="phone-id">
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter phone"
                required
              />
            </div>

            <div>
              <div>
                <label htmlFor="id-number">ID number/passport</label>
                <input
                  type="text"
                  name="idNumber"
                  placeholder="12345 67890 123"
                  readOnly
                  onClick={() => setShowNote(true)}
                  onBlur={() => setTimeout(() => setShowNote(false), 200)}
                />
                {showNote && (
                  <div className="note-warn">
                    <div className="warning-note">i</div>
                    <h5>Note: Can't be updated</h5>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Settings;
