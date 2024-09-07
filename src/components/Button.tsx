import { ReactNode } from "react";

type CustomButtonProps = {
  onClick?: () => void;
  children?: ReactNode;
  type?: "button";
  className?: string;
  disabled?: boolean;
};

function Button({
  onClick,
  children,
  type = "button",
  className,
}: CustomButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`btn font-work-sans text-[16px] font-normal text-white text-center bg-base-color w-full ${className} hover:opacity-[0.9]`}
    >
      {children}
    </button>
  );
}

export default Button;
