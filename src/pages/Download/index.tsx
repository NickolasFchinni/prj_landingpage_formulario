import ImageAppStore from "../../assets/image-3app.png"
import ImageGooglePlay from "../../assets/image-4google.png"

function Download() {
  return (
    <div className="bg-[#EAE8E4]">
      <div className="mx-6 p-8 bg-[#3C0C60] text-white rounded-lg">
        <div>
          <h2 className="text-3xl font-semibold mb-1">
            Lorem ipsum dolor sit amet consectetur
          </h2>
          <p className="text-lg font-extralight">
            Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
            faucibus sit scelerisque quis commodo
          </p>
        </div>
        <div className="flex flex-col gap-3 items-center mt-8">
          <img src={ImageAppStore} alt="" className="w-full"/>
          <img src={ImageGooglePlay} alt="" className="w-full"/>
        </div>
      </div>
    </div>
  )
}

export default Download
