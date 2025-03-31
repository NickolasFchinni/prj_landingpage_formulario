import Instagram from "../../assets/instagram.png"
import Whatsapp from "../../assets/whatsapp.png"
import Twitter from "../../assets/twitter.png"
import Facebook from "../../assets/facebook.png"

function Footer() {
  return (
    <div className="bg-[#2D2D2D]">
      <div className="p-6 text-[#EAE8E4]">
        <div className="border border-[#DFBBFE]"></div>
        <div className="mt-4 mb-6 flex gap-8 justify-center md:py-6">
          <img src={Instagram} alt="" />
          <img src={Whatsapp} alt="" />
          <img src={Twitter} alt="" />
          <img src={Facebook} alt="" />
        </div>
        <p className="text-lg text-center font-semibold">Lorem ipsum dolor sit amet</p>
        <div className="flex flex-wrap justify-center gap-x-6 mt-3">
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
