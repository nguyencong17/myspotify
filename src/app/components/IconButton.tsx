import React, { ForwardRefExoticComponent, RefAttributes } from "react";

interface Props {
  icon: ForwardRefExoticComponent<RefAttributes<SVGSVGElement>>;
  label: string
}

const IconButton = ({ icon: Icon, label }: Props) => {
  return (
    <button className="flex items-center space-x-2 hover:text-white">
      <div className="icon">
        <Icon />
      </div>
      <span>{label}</span>
    </button>
  )
}

export default IconButton;