import { useState } from "react"

export default function InputField(props) {
  const [focused, setFocused] = useState(false)

  return (
    <div className="relative my-5">
      <label className={`absolute left-3 text-gray-500 transition-all ${focused || props.value ? '-top-4 bg-gray-50 text-gray-700' : 'top-1/2 transform -translate-y-1/2'}`}>
        {props.label}
      </label>
      <input
        className="block w-full border border-gray-300 rounded transition-all outline-none px-2 py-2 text-gray-600 focus:border-gray-500 focus:outline-none"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...props}
      />
    </div>
  )
}