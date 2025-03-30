import ImageOne from "../../assets/image-images.png"
import ImageTwo from "../../assets/image-1-images.png"
import ImageThree from "../../assets/image-2-images.png"

function Images() {
  return (
    <div className="bg-[#EAE8E4]">
      <div className="px-6">
        <div className="py-8">
          <div>
            <h2 className="text-3xl font-semibold mb-1">
              Lorem ipsum dolor sit amet consectetur
            </h2>
            <p className="text-lg font-extralight mb-4">
              Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
              faucibus sit scelerisque quis commodo
            </p>
            <img src={ImageOne} alt="" className="mb-1 md:mb-0"/>
          </div>

          <img src={ImageTwo} alt="" className="mb-1"/>
          <img src={ImageThree} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Images
