

export default function button({props = "Home"}:any){
    return(
        <button className="bg-red-600 text-white p-2 rounded-lg
        hover:bg-red-700 text-xl">
        {props}
        </button>
    )
}