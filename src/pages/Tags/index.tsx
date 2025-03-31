function Tags() {
  const tags = [
    { id: 1, name: "Perfumaria" },
    { id: 2, name: "Corpo e banho" },
    { id: 3, name: "Hidratante" },
    { id: 4, name: "Desodorante" },
    { id: 5, name: "Cabelos" },
    { id: 6, name: "Maquiagem" },
    { id: 7, name: "Rosto" },
    { id: 8, name: "Casa" },
    { id: 9, name: "Infantil" },
    { id: 10, name: "Shampoo" },
    { id: 11, name: "Sabonete" },
    { id: 12, name: "Body splash" },
    { id: 13, name: "Óleo corporal" },
    { id: 14, name: "Corretivo" },
    { id: 15, name: "Protecção solar" },
  ]

  return (
    <div className="bg-[#EAE8E4] pt-8 pb-4">
      <div className="p-6 md:container md:mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold mb-1 text-[#2D2D2D]">
          Lorem ipsum dolor sit amet consectetur
        </h2>
        <div className="flex flex-wrap gap-3 md:gap-6 justify-center py-6 md:px-16 md:mt-3">
        {
          tags.map(tag => (
            <div key={tag.id}>
              <p className="text-lg md:text-xl font-semibold text-[#7D26C9] px-6 py-2 rounded-full border-[1.5px] border-[#7D26C9]">{tag.name}</p>
            </div>
          ))
        }
        </div>
        
      </div>
    </div>
  )
}

export default Tags
