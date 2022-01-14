import { useState } from "react";

type InputTextProps = {
  id: string;
  name: string;
  value: number | string;
  errorResponse?: string;
  onChange: (target: { name: string; value: string }) => void;
  prepend?: number | string;
  append?: number | string;
  type?: string;
  placeholder?: string;
  outerClassName?: string;
  inputClassName?: string;
};

const defaultProps = {
  type = "text",
  placeholder = "Please type here...",
  errorResponse = "Please match the requested format.",
};

const InputText = ({
  id,
  value,
  type,
  placeholder,
  errorResponse,
  name,
  onChange,
  prepend,
  append,
  outerClassName,
  inputClassName,
}: InputTextProps) => {
  // states
  const [HasError, setHasError] = useState<string | null>(null);

  let pattern = new RegExp("");
  if (type === "email") pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (type === "tel") pattern = /"[0-9]*"/;

  const handleChange = (event) => {
    const target = {
      target: {
        name: name,
        value: event.target.value,
      },
    };

    if (type === "email") {
      if (!pattern.test(event.target.value)) setHasError(errorResponse);
      else setHasError(null);
    }

    if (type === "tel") {
      if (event.target.validity.valid) onChange(target);
    } else {
      onChange(target);
    }
  };

  return (
    <div className={["input-text mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text">{prepend}</span>
          </div>
        )}
        <input
          id={id}
          name={name}
          type={type}
          pattern={pattern.toString()}
          className={["form-control", inputClassName].join(" ")}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />
        {append && (
          <div className="input-group-append bg-gray-900">
            <span className="input-group-text">{append}</span>
          </div>
        )}
      </div>
      {HasError && <span className="error-helper">{HasError}</span>}
    </div>
  );
};

InputText.defaultProps = defaultProps;

export default InputText;
