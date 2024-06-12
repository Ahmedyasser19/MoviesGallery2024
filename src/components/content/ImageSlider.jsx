import React, { useState } from "react";
import Plus from "/Plus.svg";
import Prev from "/Previous.svg";
import Next from "/Next.svg";
import sliderDotNull from "/sliderDot.svg";
import sliderDoActive from "/sliderDotActive.svg";

const ImageSlider = ({ imageArray, tittleArray }) => {
  const [imageIndex, setImageIndex] = useState(0);

  let sliderDO = sliderDotNull;
  const goPrev = () => {
    setImageIndex((index) => {
      if (index === 0) return imageArray.length - 1;
      return index - 1;
    });
  };

  const goNext = () => {
    setImageIndex((index) => {
      if (index === imageArray.length - 1) return 0;
      return index + 1;
    });
  };

  return (
    <div className="Banner">
      <div className="BannerImgContainer">
        {imageArray.map((img, index) => (
          <img
            src={img}
            key={index}
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>

      <div className="BannerText">
        <h2>{tittleArray[imageIndex]}</h2>
        <div className="BannerMid">
          <div className="BtnMid" onClick={goPrev}>
            <img src={Prev}></img>
          </div>
          <div className="BtnMid" onClick={goNext}>
            <img src={Next}></img>
          </div>
        </div>
        <div className="BannerLow">
          <div className="BtnLow">
            <div className="WatchList">
              <img src={Plus} />
              <div>Watchlist</div>
            </div>
          </div>
          <div className="Sliders">
            {imageArray.map((_, index) => (
              <img
                key={index}
                src={index === imageIndex ? sliderDoActive : sliderDotNull}
                onClick={() => setImageIndex(index)}
              />
            ))}
          </div>
          <div className="BtnLow BtnRight">Watch Now</div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
