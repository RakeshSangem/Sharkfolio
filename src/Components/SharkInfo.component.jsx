const SharkInfo = ({information}) => {
    return (
        <div className="flex flex-col w-full bg-[#ffffffcc] items-center justify-center p-2 rounded-md card -translate-y-24 opacity-0">
            <div className="w-full h-56 bg-cyan-700 rounded-md"></div>
            <p className="text-sm text-black p-2 leading-4">{ information }</p>
        </div>
    )
}

export default SharkInfo