import { useState } from "react";

const useHovered = () => {
  const [isHovered, setIsHoverded] = useState(false);

  const handleMouseEnter = () => {
    setIsHoverded(true);
  };
  
  const handleMouseLeave = () => {
    setIsHoverded(false);
  };

  return [isHovered, handleMouseEnter, handleMouseLeave];
};

export default useHovered;