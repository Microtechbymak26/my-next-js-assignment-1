import Link from "next/link";
import Button from "./button";


export default function NavbarPage(){
    return(
        <div className="bg-gradient-to-b from-green-500 to-indigo-500 px-5">

            <div className="flex py-2 justify-between w-full">

             {/* logo */}
             <div className="flex items-center">
              <h1 className="font-bold text-slate-100 sm:text-2xl italic ">Hello to my first website</h1>
             </div>

              {/* links */}
              <div className="space-x-2">
               <Link href={"/"}>
                <Button/>
               </Link>

               <Link href={"/about"}>
                <Button props="About"/>
               </Link>

               <Link href={"/contact"}>
                <Button props="Contact"/>
               </Link>
              </div>
            </div>

        </div>
    )
}