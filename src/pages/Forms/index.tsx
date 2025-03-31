import FooterImage from "../../assets/footer-image.png"

function Forms() {
  return (
    <div id="formulario" className="bg-[#2D2D2D] py-8 md:py-16">
      <div className="flex flex-col md:flex-row md:justify-between items-center justify-center px-6 gap-8 md:gap-16 md:container md:mx-auto">
        <img src={FooterImage} alt="Imagem para decoração ao lado do formulário" className="" />
        <div className="bg-[#EAE8E4] md:mx-0 p-6 rounded-xl text-[#2D2D2D] ">
          <h2 className="text-3xl md:text-4xl font-semibold mb-1">
            Lorem ipsum dolor sit amet consectetur
          </h2>
          <p className="text-lg md:text-xl font-extralight mb-4">
            Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
            faucibus sit scelerisque
          </p>
          <p className="text-lg md:text-xl font-extralight mb-4">
            *Lorem ipsum dolor sit amet consectetur
          </p>
          <form action="submit" className="text-lg space-y-3">
            <div className="md:flex md:gap-5">
              <div className="space-y-3">
                <input
                  className="bg-white w-full py-2 px-3 rounded-lg"
                  type="text"
                  name="Categoria 1"
                  placeholder="Categoria*"
                />
                <input
                  className="bg-white w-full py-2 px-3 rounded-lg"
                  type="text"
                  name="Categoria 1"
                  placeholder="Categoria*"
                />
              </div>
              <div className="space-y-3 mt-3 md:mt-0">
                <input
                  className="bg-white w-full py-2 px-3 rounded-lg"
                  type="text"
                  name="Categoria 1"
                  placeholder="Categoria*"
                />
                <input
                  className="bg-white w-full py-2 px-3 rounded-lg"
                  type="text"
                  name="Categoria 1"
                  placeholder="Categoria*"
                />
              </div>
            </div>

            <div className="font-semibold my-4 md:my-6">
              <div className="md:flex md:items-center">
              <p className="text-lg md:text-xl md:w-1/2">Verificação de segurança</p>
              <div className="flex w-full items-center mt-2">
                <div className="px-4 py-2 bg-[#DFDCD5] rounded-lg w-5/12 md:w-1/3 text-center">
                  <p className="text-[#7D26C9]">
                    {Math.floor(Math.random() * 1000)}{" "}
                    <span className="text-[#2D2D2D]">+</span>{" "}
                    {Math.floor(Math.random() * 1000)}
                  </p>
                </div>
                <p className="px-2">=</p>
                <input
                  type="text"
                  name="resultado"
                  placeholder="Resultado*"
                  className="w-1/2 md:w-full bg-white py-2 px-3 rounded-lg"
                />
              </div>
              </div>
              
            </div>
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="text-lg font-semibold px-8 rounded-md py-2 bg-[#DFBBFE]"
              >
                Lorem ipsum
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Forms
