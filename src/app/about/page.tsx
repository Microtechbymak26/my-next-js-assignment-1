import Link from "next/link";
import Button from "../components/button";
import Image from "next/image";
import logo from "./image2.jpg"


export default function About(){
    return(
        <div className="flex justify-center items-center h-screen bg-green-400 px-20">
    <Image src={logo} alt='shoe image' width={500} height={300} />
            
            <div className="space-y-5 bg-green-200 p-7 rounded-lg">
                <h1 className="text-6xl text-center font-bold">About US</h1>

               <p className="text-2xl text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et mollitia ullam dolorem laboriosam. Sit voluptatem, quae accusantium consequatur iusto molestiae voluptas repellat. Non, iure. Dolorum et reiciendis aut voluptate. Doloremque.</p>
            </div>

            <div>
                <Link href={"/"}>

                <Button/>

                </Link>

            </div>

        </div>
    )
}