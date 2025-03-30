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
    <div className="bg-white rounded-xl shadow-md border-[2px] border-[#DFBBFE] py-6 px-8">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-lg">{text}</p>
      <div className="flex justify-center pt-6">
      <button className="text-lg font-semibold px-8 rounded-md py-2 text-[#2D2D2D] bg-[#DFBBFE]">{btnText}</button>
      </div>
    </div>
  )
}

export default CardLastSection
