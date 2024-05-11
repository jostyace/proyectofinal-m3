import { Button } from "primereact/button";

export const Buttons = ({ tipo, texto, icon, onClick }) => {
  return (
    <Button
      onClick={onClick}
      className={`h-[40px]  ${tipo} text-white  shadow-md font-light bg-elementos font-raleway text-sm `}
      label={texto}
      icon={icon}
    />
  );
};
