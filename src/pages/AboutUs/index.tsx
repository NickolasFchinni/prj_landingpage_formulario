import CardAboutUs from "../../components/CardAboutUs"
import ImageMontains from "../../assets/image.png"
import ImageCity from "../../assets/image-1.png"
import ImageSky from "../../assets/image-2.png"
import ImageBridge from "../../assets/image-3.png"

function AboutUs() {
  return (
    <div className="bg-[#EAE8E4] pb-4">
      <div className="px-6">
        <div className="py-8">
          <h2 className="text-3xl font-semibold mb-1">Lorem ipsum dolor sit amet consectetur</h2>
          <p className="text-lg font-extralight">
            Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
            faucibus sit scelerisque quis commodo
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <CardAboutUs
            image={ImageMontains}
            title="Lorem ipsum dolor"
            text="Lorem ipsum dolor sit amet consectetur."
          />
          <CardAboutUs
            image={ImageCity}
            title="Lorem ipsum dolor"
            text="Lorem ipsum dolor sit amet consectetur."
          />
          <CardAboutUs
            image={ImageSky}
            title="Lorem ipsum dolor"
            text="Lorem ipsum dolor sit amet consectetur."
          />
          <CardAboutUs
            image={ImageBridge}
            title="Lorem ipsum dolor"
            text="Lorem ipsum dolor sit amet consectetur."
          />
        </div>
      </div>
    </div>
  )
}

export default AboutUs
