import Scroll from "../../assets/scroll-icon.png"
import AnchorLink from "react-anchor-link-smooth-scroll"

function Home() {
  return (
    <div id="home" className="bg-[url(/bg-home.png)] md:bg-[url(/Hero-LP-melhorQualidade.png)] bg-cover md:rounded-b-4xl w-full">
      <div className="px-6 md:container md:mx-auto">
        <div className="w-8/12 md:w-7/12 md:pt-8 md:pb-4">
          <h1 className="text-3xl md:text-5xl tracking-wide font-extrabold text-white pt-20">
            Lorem ipsum dolor sit amet consectetur
          </h1>
          <p className="text-white text-lg md:text-2xl font-extralight pt-3 2xl:w-2/3">
            Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
            faucibus sit scelerisque quis commodo aenean viverra
          </p>
          <AnchorLink href="#quem-somos" className="flex justify-center 2xl:w-2/3 py-6">
            <img src={Scroll} alt="" className="w-12 md:w-20 md:mt-4" />
          </AnchorLink>
        </div>
      </div>
    </div>
  )
}

export default Home
