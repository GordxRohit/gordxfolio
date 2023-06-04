const Footer = () => {
  return (
    <div className="text-gray-300 bg-zinc-800/50 py-3 px-5 rounded-tl rounded-tr">
       <div className="max-w-screen-lg w-full mx-auto flex items-center space-x-2">
       <span className="text-sm font-medium">Created by </span><span className="text-gray-500 font-semibold">Rohit Kumar Mandal</span>
        <span className="text-sm">&copy;</span>
        <span className="text-sm">{new Date().getFullYear()}</span>
       </div>
    </div>
  )
}

export default Footer