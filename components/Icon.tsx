import { icons } from "lucide-react-native";
import { iconWithClassName } from "@/lib/iconWithClassName";
import { cn } from "@/lib/utils";

export default function Icon({
  name,
  color,
  size,
  className,
  stokeWidth,
}: {
  name: keyof typeof icons;
  color?: string;
  size?: number;
  className?: string;
  stokeWidth?: number;
}) {
  const LucideIcon = icons[name];

  iconWithClassName(LucideIcon);

  return (
    <LucideIcon
      strokeWidth={stokeWidth ?? 1.5}
      color={color}
      size={size ?? 24}
      className={cn(!color && "text-foreground", className)}
    />
  );
}
