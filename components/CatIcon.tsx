interface CatIconProps {
  type?: "tuxedo" | "ginger" | "tabby" | "calico" | "blackcat";
  className?: string;
}

const catEmojis: Record<string, string> = {
  tuxedo: "😺",
  ginger: "🐱",
  tabby: "🐈",
  calico: "😻",
  blackcat: "🖤",
};

export default function CatIcon({ type = "tuxedo", className }: CatIconProps) {
  return <span className={className}>{catEmojis[type]}</span>;
}
