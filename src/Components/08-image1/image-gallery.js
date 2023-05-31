import React from 'react'
import "./gallery.scss"

const ImageGallery = () => {

    const gallery = [
        "image1.jpeg",
        "image2.jpeg",
        "image3.jpeg"
    ];
      
    


  return (
    <div className='gallery'>
        {gallery.map(image =>
             <div>
                 <img src={ require(`../../assets/img/${image}`)} />   
             </div>)
        }

    </div>
  )
}

export default ImageGallery