interface CardLastSectionProps {
  btnText: string
  title: string
  text: string
}

const CardLastSection: React.FC<CardLastSectionProps> = ({
  btnText,
  title,
  text,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md border-[2px] border-[#DFBBFE] py-6 px-8  text-[#2D2D2D]">
      <h3 className="text-xl md:text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-lg md:text-xl">{text}</p>
      <div className="flex justify-center pt-6">
      <button className="text-lg md:text-xl font-semibold px-8 rounded-md py-2 md:mt-2 bg-[#DFBBFE]">{btnText}</button>
      </div>
    </div>
  )
}

export default CardLastSection
