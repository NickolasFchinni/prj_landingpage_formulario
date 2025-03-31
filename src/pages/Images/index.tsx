import ImageOne from "../../assets/image-images.png"
import ImageTwo from "../../assets/image-1-images.png"
import ImageThree from "../../assets/image-2-images.png"

function Images() {
  return (
    <div id="imagens" className="bg-[#EAE8E4]">
      <div className="px-6 md:container md:mx-auto">
        <div className="py-8 md:flex md:justify-between md:items-center">
          <div className="text-[#2D2D2D] md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-semibold mb-1">
              Lorem ipsum dolor sit amet consectetur
            </h2>
            <p className="text-lg md:text-2xl font-extralight mb-4 md:w-11/12">
              Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
              faucibus sit scelerisque quis commodo
            </p>
            <img src={ImageOne} alt="" className="mb-1 md:mb-0" />
          </div>
          <div className="">
            <img src={ImageTwo} alt="" className="mb-1" />
            <img src={ImageThree} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Images
