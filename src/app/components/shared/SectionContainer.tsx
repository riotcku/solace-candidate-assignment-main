import { ReactNode } from "react";
interface ContainerType {
  className?: string;
  children: ReactNode;
}

const SectionContainer = ({
  className,
  children,
}: ContainerType) => {
  return (
    <div className={`mx-auto max-w-1440 lg:pt-5 pt-4 px-4 ${className || ""}`}>
      {children}
    </div>);
}

export default SectionContainer;