import { useState } from "react"

export default function InputField(props) {
  const [blur, setBlur] = useState(false)

  return (
    <div className="relative my-5">
      <label className={`absolute left-3 text-gray-700 transition-all ${!blur ? 'top-1/2 transform -translate-y-1/2' : '-top-4 bg-gray-50'}`}>
        {props.label}
      </label>
      <input
        className="block w-full border border-gray-300 rounded transition-all outline-none px-2 py-1 focus:border-gray-500 focus:outline-none"
        onFocus={() => setBlur(true)}
      />
    </div>
  )
}