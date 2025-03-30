interface CardAboutUsProps {
  image: string
  title: string
  text: string
}

const CardAboutUs: React.FC<CardAboutUsProps> = ({ image, title, text }) => {
  return (
    <div className="bg-white rounded-xl shadow-md">
      <img
        src={image}
        className="rounded-lg w-full h-auto px-2 pt-2"
        alt={title}
      />
      <div className="px-4 py-2 text-[#0C111D]">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="">{text}</p>
      </div>
    </div>
  )
}

export default CardAboutUs
