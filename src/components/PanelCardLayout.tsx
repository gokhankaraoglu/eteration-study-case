import { ReactNode } from "react";

type PanelCardLayoutProps = {
  children?: ReactNode;
  name?: string;
  className?: string;
};

function PanelCardLayout({ name, children, className }: PanelCardLayoutProps) {
  return (
    <div className={`${className}`}>
      {name && (
        <h4 className="text-gray-text-color text-[12px] font-normal mb-1.5">
          {name}
        </h4>
      )}
      <div className="p-4 flex flex-col bg-white gap-[15px] shadow-md">
        {children}
      </div>
    </div>
  );
}

export default PanelCardLayout;
