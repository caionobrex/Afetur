import { useState } from "react"

export default function Input({ label }) {
  const [blur, setBlur] = useState(false)

  return (
    <div className="relative">
      <label className="absolute left-2">{label}</label>
      <input className="block w-full" onBlur={() => setBlur(true)} />
    </div>
  )
}