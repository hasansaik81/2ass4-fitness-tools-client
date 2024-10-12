import img1 from "../../../assets/images/h1.jpg";
import img2 from "../../../assets/images/h2.jpg";
import img3 from "../../../assets/images/h3.jpg";
import img4 from "../../../assets/images/h4.jpg";
import img5 from "../../../assets/images/h5.jpg";
import img6 from "../../../assets/images/h6.jpg";
import img7 from "../../../assets/images/h7.jpg";
import img8 from "../../../assets/images/h8.jpg";
import img9 from "../../../assets/images/h9.jpg";
import img10 from "../../../assets/images/h10.jpg";
import img11 from "../../../assets/images/h12.jpg";
import img13 from "../../../assets/images/h15.jpg";
import SectionTitle from "@/components/shared/SectionTitle";

const Gallery = () => {
  return (
    <div>
      <SectionTitle title="gallery" subTitle="our healthy customers" />
      <div className="photo-gallery flex lg:flex-row flex-col gap-5 lg:px-auto px-4">
        <div className="column">
          <div className="photo">
            <img
              src={img1}
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
          <div className="photo">
            <img
              src={img8}
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
          <div className="photo">
            <img
              src={img3}
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
        </div>
        <div className="column">
          <div className="photo">
            <img
              src={img4}
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
          <div className="photo">
            <img
              src={img5}
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
          <div className="photo">
            <img
              src={img6}
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
        </div>
        <div className="column">
          <div className="photo">
            <img
              src={img7}
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
          <div className="photo">
            <img
              src={img2}
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
          <div className="photo">
            <img
              src={img9}
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
        </div>
        <div className="column">
          <div className="photo">
            <img
              src={img13}
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
          <div className="photo">
            <img
              src={img11}
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
          <div className="photo">
            <img
              src={img10}
              alt={`Gallery image`}
              className="max-w-full w-full h-auto object-cover align-middle inline-block rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
