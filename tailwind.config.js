module.exports = {
    theme: {
      extend: {
        colors: {
          primary: "rgb(var(--primary))",
          primaryHover: "rgb(var(--primary-hover))",
          secondary: "rgb(var(--secondary))",
  
          background: {
            light: "rgb(var(--bg-light))",
            subtle: "rgb(var(--bg-subtle))",
          },
  
          surface: "rgb(var(--surface))",
          borderSoft: "rgb(var(--border-soft))",
  
          text: {
            primary: "rgb(var(--text-primary))",
            secondary: "rgb(var(--text-secondary))",
            onLight: "rgb(var(--text-on-light))",
          },
  
          accent: "rgb(var(--accent))",
          success: "rgb(var(--success))",
          error: "rgb(var(--error))",
          info: "rgb(var(--info))",
        },
        borderRadius: {
          sm: "var(--radius-sm)",
          md: "var(--radius-md)",
          lg: "var(--radius-lg)",
        },
        backgroundImage: {
          "sunset-whiskers":
            "linear-gradient(90deg, #FF8C42, #FFB75E)",
          "nap-time-glow":
            "linear-gradient(180deg, #FFF3E0, #FFE6CC)",
          "golden-paws":
            "linear-gradient(135deg, #FFD97D, #FFB75E)",
        },
      },
    },
  };
  