import ImageAppStore from "../../assets/image-3app.png"
import ImageGooglePlay from "../../assets/image-4google.png"

function Download() {
  return (
    <div id="download" className="bg-[#EAE8E4]">
      <div className="md:container md:mx-auto px-6 md:py-8">
        <div className="md:mx-2 p-8 md:py-10 bg-[#3C0C60] text-[#EAE8E4] rounded-xl md:flex md:items-center gap-28 md:justify-center ">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold mb-1">
              Lorem ipsum dolor sit amet consectetur
            </h2>
            <p className="text-lg md:text-2xl font-extralight">
              Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
              faucibus sit scelerisque quis commodo aenean viverra
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center mt-8 md:mt-0">
            <img src={ImageAppStore} alt="" className="w-full" />
            <img src={ImageGooglePlay} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Download
