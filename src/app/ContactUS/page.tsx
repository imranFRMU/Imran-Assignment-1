import Input from "postcss/lib/input";
import Link from "next/link";



export default function ContactUS() {
    return (
        
        <div className="blue bg-slate-600 flex justify-center items-center h-screen">
            

        <div className="space gap-y-7 bg-rose-500 p-4 rounded-lg">
            
            <h1 className="text-center text-5xl text-white font-bold">Contact Us</h1>
            <form className="flex flex-col gap-5 text 2xl:">

                <input type="text" 
                className="p-2 outline-none rounded-md"
                placeholder="Your Name"/>

                <input type="email"
                className="p-2 outline-none rounded-md"
                placeholder="Your ID"/>

                <textarea
                className="p-2 outline-none rounded-md resize-none"
                placeholder="Your Message"></textarea>

                <input type="submit" value="submit" 
                className="bg-orange-500 text-white cursor-pointer transition-all duration-100
                hover:bg-orange-600 py-2 rounded-b-md"/>

            </form>
        </div>
        </div>
    )
}