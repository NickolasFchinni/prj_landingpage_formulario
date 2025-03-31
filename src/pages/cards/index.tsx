import CardLastSection from "../../components/CardLastSection"

function CardsLast() {
  const cardContent = [
    {
      id: 0,
      title: "Lorem ipsum dolor sit amet",
      text: "Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra.",
      textBtn: "Lorem ipsum",
    },
    {
      id: 0,
      title: "Lorem ipsum dolor sit amet",
      text: "Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra.",
      textBtn: "Lorem ipsum",
    },
    {
      id: 0,
      title: "Lorem ipsum dolor sit amet",
      text: "Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque quis commodo aenean viverra.",
      textBtn: "Lorem ipsum",
    },
  ]

  return (
    <div className="bg-[#EAE8E4] pb-16">
      <div className="px-6 flex flex-col md:flex-row gap-4 md:container md:mx-auto">
        {cardContent.map((card) => (
          <CardLastSection
            key={card.id}
            text={card.text}
            title={card.title}
            btnText={card.textBtn}
          />
        ))}
      </div>
    </div>
  )
}

export default CardsLast
