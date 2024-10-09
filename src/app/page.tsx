import Link from "next/link";
import Button from "./components/button";
import logo1 from './images.jpeg'
import Image from 'next/image'


export default function Home() {
  return (
    <div className="bg-purple-500 h-screen flex justify-center items-center
    flex-col gap-5">
      <h1 className="sm:text-8xl text-3xl font-bold">Home page</h1>
      <Image src={logo1} alt='' width={500} height={300} />
      <div className="space-x-5">
        <Link href={"/about"} target="_blank">  
        <Button props="About"/>
        </Link>

        <Link href={"/contact"} target="_blank">
        <Button props="Contact"/>
        </Link>
      </div>
    </div>
  );
}
