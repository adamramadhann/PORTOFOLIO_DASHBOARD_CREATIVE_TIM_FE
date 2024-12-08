import React, { useState } from 'react'
import Image from '/image copy 23.png'

const ImageUpluod = () => {
    const [img, setImg] = useState(null)

    const hanldeUploadImage = (e) => {
        const file = e.target.files[0]
        if(file) {
            const imgUrl = URL.createObjectURL(file)
            setImg(imgUrl)
        }
    }
  return (
    <div>
        <img
        src={img || Image}
        alt=""
        className="w-[120px] h-[120px] rounded-full"
        onClick={() => document.getElementById('fileImg').click()}
        />
        <input 
        type="file" 
        id='fileImg'
        style={{display:'none'}}
        accept='image/*'
        onChange={hanldeUploadImage}
        />
    </div>
  )
}

export default ImageUpluod