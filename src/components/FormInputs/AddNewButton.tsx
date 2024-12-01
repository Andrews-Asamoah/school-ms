import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

type AddNewButtonProps = {
  //   href: string;
  toolTipText: string;
};
const AddNewButton = ({
  //  href,
  toolTipText,
}: AddNewButtonProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild> {toolTipText}</TooltipTrigger>
      <TooltipContent />
    </Tooltip>
  );
};

export default AddNewButton;
