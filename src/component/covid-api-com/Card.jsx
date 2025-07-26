export default function Card({color, title, data}) {
  return (
    <div className={`${color} rounded-md flex-auto p-6 border-l-6 shadow-[1px_3px_5px_0px_gray]`}>
        <div>{title}</div>
        <div className="font-bold">{data}</div>
    </div>
  )
}
