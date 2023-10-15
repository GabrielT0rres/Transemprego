import style from './style.module.css'
import { useState, useRef } from "react";
import icon from '../../assets/icone-pdf.svg'

const CardDragDrop = (props) => {
    const [files, setFiles] = useState(null);
    const inputRef = useRef();

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setFiles(event.dataTransfer.files)
    };

    // send files to the server // learn from my other video
    const handleUpload = () => {
        const formData = new FormData();
        formData.append("Files", files);
        console.log(formData.getAll())
        // fetch(
        //   "link", {
        //     method: "POST",
        //     body: formData
        //   }  
        // )
    };

    if (files) return (
        <div
            className={`${style.dropzone}`}
            onDragOver={handleDragOver}
            onDrop={handleDrop}>

            <img src={icon}
                className={`${style.icone}`}
                alt=""
                onClick={() => inputRef.current.click()}
            />
            {Array.from(files).map((file, idx) => <p className={`${style.texto}`} key={idx}>{file.name}</p>)}

            <input
                className={`${style.input_file}`}
                ref={inputRef}
                type="file"
                multiple
                onChange={(event) => setFiles(event.target.files)}
                hidden
                accept="image/png, image/jpeg"
            />
        </div>
    )

    return (
        <>
            <div
                className={`${style.dropzone}`}
                onDragOver={handleDragOver}
                onDrop={handleDrop}>

                <img src={icon}
                    className={`${style.icone}`}
                    alt=""
                    onClick={() => inputRef.current.click()}
                />
                <p className={`${style.texto}`} >Envie seu currículo em PDF.</p>
                <input
                    className={`${style.input_file}`}
                    ref={inputRef}
                    type="file"
                    multiple
                    onChange={(event) => setFiles(event.target.files)}
                    hidden
                    accept="image/png, image/jpeg"
                />
            </div>
        </>
    );
};

export default CardDragDrop;