import { useEffect, useState } from "react";

interface InputFileProps {
    classNameSelectionLabel?: string,
    classNameImage?: string,
    classNameInput?: string,
    pictureImageTxt?: string,
    setImage: (value: string) => void
}

export default function InputFile({ classNameInput, classNameSelectionLabel, classNameImage, pictureImageTxt, setImage }: InputFileProps) {

    const [fileBase64, setFileBase64] = useState<string>('');

    function handleFile(files: FileList | null) {
        if (files) {
            const fileRef = files[0] || '';
            const fileType = fileRef.type || '';
            const reader = new FileReader();
            reader.readAsBinaryString(fileRef);
            reader.onload = (ev: any) => {
                setFileBase64(`data:${fileType};base64,${btoa(ev.target.result)}`);
            }
        }
    }

    useEffect(() => setImage(fileBase64), [fileBase64])

    return (

        <label className={classNameSelectionLabel}>
            <input
                type="file"
                accept="image/*"
                className={classNameInput}
                onChange={(e) => handleFile(e.target.files)}
            />
            {
                fileBase64
                    ? <img src={fileBase64} className={classNameImage} />
                    : <span >{pictureImageTxt}</span>
            }
        </label>

    )
}