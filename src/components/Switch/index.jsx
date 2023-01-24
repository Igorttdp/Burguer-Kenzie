
// Components
import * as Switch from "@radix-ui/react-switch";

// Styles
import "./style.css";

const SwitchButton = ({ darkmode, setDarkmode }) => {

  const handleClick = () => {
    setDarkmode(!darkmode);
  };

  return (
    <Switch.Root
      className="SwitchRoot"
      checked={darkmode}
      onClick={handleClick}
    >
      <Switch.Thumb className="SwitchThumb" />
    </Switch.Root>
  );
};

export default SwitchButton;
