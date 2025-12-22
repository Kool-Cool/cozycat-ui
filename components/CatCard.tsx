import { cn } from "@/lib/cn";

interface CatCardProps {
  type?: "tuxedo" | "ginger" | "tabby" | "calico" | "blackcat";
  title: string;
  children: React.ReactNode;
}

const catCardColors: Record<string, string> = {
  tuxedo: "bg-gray-100 border-gray-300",
  ginger: "bg-orange-50 border-orange-200",
  tabby: "bg-yellow-50 border-yellow-200",
  calico: "bg-white border-orange-300",
  blackcat: "bg-gray-800 text-white border-gray-700",
};

export default function CatCard({ type = "tuxedo", title, children }: CatCardProps) {
  return (
    <div className={cn("p-4 rounded-lg border shadow-sm transition-all duration-300", catCardColors[type])}>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p>{children}</p>
    </div>
  );
}
