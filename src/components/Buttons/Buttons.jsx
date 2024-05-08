import { Button } from 'primereact/button';  

export const Buttons = ({tipo, texto, icon}) => {
  return (
<Button className={`bg-elementos h-[40px] text-white  shadow-md font-light ${tipo === 'icon' ? 'rounded-full w-[41px] flex justify-center items-center p-0' : 'rounded-sm px-6  py-2' } font-raleway text-sm`} label={texto} icon={icon} /> 
  )
}
