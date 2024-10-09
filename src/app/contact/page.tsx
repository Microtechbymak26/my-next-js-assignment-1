import Link from "next/link";
import Button from "../components/button";

export default function Contact(){
    return(
        <div className="bg-green-300 flex justify-center items-center h-screen">

            <div className="space-y-7 bg-blue-600 p-4 rounded-lg">

                <h1 className="text-center text-5xl text-white font-bold">Contact US</h1>

                <form className="flex flex-col gap-5 text-2xl">
                     <input type="text" 
                     className="p-2 outline-none rounded-md"
                     placeholder="Your name"
                     />

                     <input type="email" 
                     className="p-2 outline-none rounded-md"
                     placeholder="Your email"
                     />

                     <textarea
                     className="p-2 outline-none rounded-md"
                     placeholder="Your message"
                     ></textarea>

                     <input type="submit" value="Submit"
                     className="bg-orange-500 text-white cursor-pointer transition-all duration-100
                     hover:bg-orange-600 py-2 rounded-md"
                     />

                </form>

                <div>
                <Link href={"/"}>
                <Button/>
                </Link>
                </div>
            </div>
        </div>
    )
}