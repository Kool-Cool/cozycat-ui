import { cn } from "@/lib/cn";

interface CatButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "tuxedo" | "ginger" | "tabby" | "calico" | "blackcat";
  children: React.ReactNode;
}

const catColors: Record<string, string> = {
  tuxedo: "bg-black text-white hover:bg-gray-800",
  ginger: "bg-orange-400 text-white hover:bg-orange-500",
  tabby: "bg-yellow-300 text-brown-900 hover:bg-yellow-400",
  calico: "bg-white text-orange-600 hover:bg-orange-200",
  blackcat: "bg-gray-900 text-white hover:bg-gray-700",
};

export default function CatButton({ type = "tuxedo", className, ...props }: CatButtonProps) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-lg font-bold transition-all duration-300",
        catColors[type],
        className
      )}
      {...props}
    />
  );
}
