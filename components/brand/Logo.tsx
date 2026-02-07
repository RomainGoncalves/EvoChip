import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: { width: 160, height: 40, className: "h-10" },
  md: { width: 224, height: 56, className: "h-14" },
  lg: { width: 256, height: 64, className: "h-16" },
};

export const Logo = ({ size = "md", className = "" }: LogoProps) => {
  const { width, height, className: sizeClassName } = sizeMap[size];

  return (
    <Image
      src="/evochip-logo.png"
      alt="EvoChip Logo"
      width={width}
      height={height}
      className={`${sizeClassName} w-auto ${className}`}
    />
  );
};
