import React, {useState} from 'react';
import {useFormContext, Controller} from 'react-hook-form';

interface FileUploadProps {
  name: string;
  label: string;
}

export const UIUploadFile: React.FC<FileUploadProps> = ({name, label}) => {
  const {control, setValue} = useFormContext();
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.files) {
      if (e.target.files.length > 0) {

      }
    }
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setValue(name, file);
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({field}) => (
        <div className={"w-full"}>
          <label htmlFor={name}
                 className={`block w-full px-3 py-3 border-2 border-white border-opacity-20 text-white rounded-md focus:outline-none bg-primary_black`}
          >
            {!fileName ? <p className={"opacity-50"}>{label}</p> : (
              <div className={"flex w-full h-full items-center gap-x-3"}>
                <p>{fileName}</p>
              </div>
            )}
          </label>
          <input
            id={name}
            type="file"
            accept="*"
            onChange={(e) => {
              field.onChange(e);
              handleFileChange(e);
            }}
            className="hidden"
          />
        </div>
      )}
    />
  );
};

