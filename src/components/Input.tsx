import React, { forwardRef } from "react";
interface CustomInputProps extends React.ComponentProps<"input"> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, CustomInputProps>(({ label, error, className, ...props }, ref) => {
  return (
    <div className="">
      {label && (
        <label htmlFor={props.id} className="block text-sm  mb-2 text-neutral-smokeyGrey  tracking-widest font-bold">
          {label}
        </label>
      )}
      <input
        ref={ref}
        {...props}
        className={`block  rounded-md border border-light-grey py-2 px-3 text-[32px] font-bold shadow-sm  transition-colors duration-300  focus:border-primary-default  focus:outline-none  ${
          error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-300 focus:border-primary"
        } ${className || ""}`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
});

export default Input;
