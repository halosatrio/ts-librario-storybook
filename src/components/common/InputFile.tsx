import { useRef } from "react";
import propTypes from "prop-types";

type InputFileProps = {
  name: string;
  accept: string;
  value: string;
  onChange?: () => void;
  prepend?: number | string;
  append?: number | string;
  placeholder?: string;
  outerClassName?: string;
  inputClassName?: string;
};

const InputFile = ({
  value,
  placeholder = "Browse a file...",
  name,
  accept,
  prepend,
  append,
  onChange,
  outerClassName,
  inputClassName,
}: InputFileProps) => {
  const refInputFile = useRef<HTMLInputElement | null>(null);

  return (
    <div className={["input-text mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text">{prepend}</span>
          </div>
        )}
        <input
          accept={accept}
          ref={refInputFile}
          name={name}
          className="d-none"
          type="file"
          value={value}
          onChange={onChange}
        />
        <input
          onClick={() => refInputFile.current?.click()}
          defaultValue={value}
          placeholder={placeholder}
          className={["form-control", inputClassName].join(" ")}
        />
        {append && (
          <div className="input-group-append bg-gray-900">
            <span className="input-group-text">{append}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputFile;
