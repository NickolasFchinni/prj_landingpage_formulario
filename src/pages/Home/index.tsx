import Scroll from "../../assets/scroll-icon.png"

function Home() {
  return (
    <div className="bg-[url(/bg-home.png)] bg-cover w-screen">
      <div className="px-6 ">
        <div className="w-8/12">
          <h1 className="text-3xl tracking-wide font-extrabold text-white pt-20">
            Lorem ipsum dolor sit amet consectetur
          </h1>
          <p className="text-white text-lg font-extralight pt-3">
            Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
            faucibus sit scelerisque quis commodo aenean viverra
          </p>
          <div className="flex justify-center py-6">
          <img src={Scroll} alt="" className="w-12"/>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Home
