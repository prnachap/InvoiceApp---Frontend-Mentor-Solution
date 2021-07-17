import React from "react";
import imageSrc from "../../assets/image-avatar.jpg";
import { ImageContainer } from "./ProfileImage.style";

const Profile: React.FC = () => {
  return (
    <ImageContainer>
      <img src={imageSrc} alt="man" className="profile" />
    </ImageContainer>
  );
};

export default Profile;
