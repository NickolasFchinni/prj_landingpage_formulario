import CardAboutUs from "../../components/CardAboutUs"
import ImageMontains from "../../assets/image.png"
import ImageCity from "../../assets/image-1.png"
import ImageSky from "../../assets/image-2.png"
import ImageBridge from "../../assets/image-3.png"

function AboutUs() {
  return (
    <div id="quem-somos" className="bg-[#EAE8E4] pb-4">
      <div className="px-6 md:container md:mx-auto md:py-12">
        <div className="py-8 text-[#2D2D2D]">
          <h2 className="text-3xl md:text-5xl font-semibold mb-1">Lorem ipsum dolor sit amet consectetur</h2>
          <p className="text-lg md:text-2xl font-extralight">
            Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
            faucibus sit scelerisque quis commodo
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
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
