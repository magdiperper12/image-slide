import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
  faRotateLeft,
  faRotateRight,
  faExpand,
  faArrowsUpDown,
  faArrowsLeftRight,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";

import "./wsp-gallery.css";

function WSPGallery({ handleOpenModal }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(handleOpenModal.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === handleOpenModal.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };
  /*
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideNumber((prevSlideNumber) =>
        prevSlideNumber === galleryImages.length - 1 ? 0 : prevSlideNumber + 1
      );
    }, 1000);

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [galleryImages.length]);
*/
  function RotateLeft() {
    let lage = document.getElementById("lage");
    lage.style.transform += "rotate(90deg)";
    lage.style.transition = "0.5s";
  }

  function RotateRight() {
    let lage = document.getElementById("lage");
    lage.style.transform += "rotate(-90deg)";
    lage.style.transition = "0.5s";
  }
  function rotx() {
    let lage = document.getElementById("lage");
    lage.style.transform += "rotatex(180deg)";
    lage.style.transition = "0.5s";
  }
  function roty() {
    let lage = document.getElementById("lage");
    lage.style.transform += "rotatey(180deg)";
    lage.style.transition = ".5s";
  }

  function width() {
    let lage = document.getElementById("lage");
    let fullScreenImage = document.getElementById("fullScreenImage");
    if (lage.style.maxWidth !== "90%") {
      lage.style.maxWidth = "90%";
      lage.style.maxHeight = "96%";
      lage.style.transition = "0.3s";
      lage.style.zIndex = "1";
      fullScreenImage.style.overflow = "auto";
      fullScreenImage.style.zIndex = "1";
    } else {
      lage.style.maxWidth = "75%";
      lage.style.maxHeight = "70%";
      lage.style.zIndex = "auto";
      fullScreenImage.style.overflow = "auto";
      fullScreenImage.style.zIndex = "auto";
    }
  }

  return (
    <div>
      {openModal && (
        <div className='sliderWrap'>
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className='btnPrev'
            onClick={prevSlide}
          />
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className='btnNext'
            onClick={nextSlide}
          />
          <div className='fullScreenImage' id='fullScreenImage'>
            <div className='header'>
              <FontAwesomeIcon
                className='btnClose'
                icon={faCircleXmark}
                onClick={handleCloseModal}
              />
              <FontAwesomeIcon
                className='btnClose'
                icon={faRotateRight}
                onClick={RotateRight}
              />
              <FontAwesomeIcon
                className='btnClose'
                icon={faRotateLeft}
                onClick={RotateLeft}
              />
              <FontAwesomeIcon
                className='btnClose'
                icon={faExpand}
                onClick={width}
              />
              <FontAwesomeIcon
                className='btnClose'
                icon={faArrowsUpDown}
                onClick={rotx}
              />
              <FontAwesomeIcon
                className='btnClose'
                icon={faArrowsLeftRight}
                onClick={roty}
              />
              <a href='https://www.facebook.com/' target='_blank'>
                <FontAwesomeIcon
                  className='btnClose'
                  icon={faShareNodes}
                  onClick={roty}
                />
              </a>

              <div
                className='btnClose'
                style={{
                  left: "30px",
                  position: "absolute",
                  fontSize: "20px",
                  padding: "2px",
                }}
              >
                5/{slideNumber + 1}
              </div>
            </div>
            <img
              src={galleryImages[slideNumber].img}
              alt=''
              className='first'
              id='lage'
            />
            <div className=' seound'>
              {galleryImages &&
                galleryImages.map((slide, index) => {
                  return (
                    <div
                      className='sinfootimg'
                      key={index}
                      onClick={() => handleOpenModal(index)}
                    >
                      <img src={slide.img} alt='' className='footimg' />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}

      <div className='galleryWrap'>
        {handleOpenModal &&
          handleOpenModal.map((slide, index) => {
            return (
              <div
                className='single'
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img src={slide.img} alt='' />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default WSPGallery;
