import profile from "../../assets/aiony-haust.jpg"

export default function Header() {
  return (
    <div className="flex justify-between border-b-2 items-center pb-5">
        <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
        <img className="w-14 h-14 rounded-full" src={profile} alt="" />
    </div>
  )
}
