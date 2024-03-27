import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./Carousel.css";

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <img
          className="embla__slide"
          src="https://wallpaperaccess.com/full/4596596.jpg"
        />
        <img
          className="embla__slide"
          src="https://wallpaperaccess.com/full/138894.jpg"
        />
        <img
          className="embla__slide"
          src="https://www.hdwallpapers.in/download/straight_view_of_eiffel_tower_paris_during_sunrise_with_blue_sky_background_4k_5k_hd_travel-HD.jpg"
        />
        <img
          className="embla__slide"
          src="https://wallpaperaccess.com/full/1192165.jpg"
        />
        <img
          className="embla__slide"
          src="https://wallpapercave.com/wp/wp3978983.jpg"
        />
        <img
          className="embla__slide"
          src="https://wallpaperaccess.com/full/440555.jpg"
        />
        <img
          className="embla__slide"
          src="http://www.pixelstalk.net/wp-content/uploads/2016/06/USA-Flag-Iphone-HD-Pictures.jpg"
        />
      </div>
    </div>
  );
}
