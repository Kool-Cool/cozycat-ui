"use client"

interface CopyButtonProps {
  code: string
}

export default function CopyButton({ code }: CopyButtonProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    alert("Copied to clipboard! 🐾")
  }

  return (
    <button
      onClick={handleCopy}
      className="mt-2 px-2 py-1 bg-yellow-200 rounded text-sm"
    >
      Copy Code
    </button>
  )
}
