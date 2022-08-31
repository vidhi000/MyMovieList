import requests from "../utils/requests";
import { useRouter } from "next/router";


const Nav = ()=>{
    const router = useRouter()
return(
    <>
    <nav className="relative">
        <div className="flex px-10 sm:px-20 font-semibold text-2xl whitespace-nowrap 
        space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
            {Object.entries(requests).map(([Key,{title,url}])=>(
                <h2 Key={Key}
                onClick={()=>router.push(`/?genre=${Key}`)}
                className="cursor-pointer transition last:pr-24
                 duration-100 transform hover:scale-125 hover:text-white active:text-purple-600">{title}</h2>
            ))}
        </div>

        <div className="absolute top-0 right-0 bg-gradient-to-l from-[#4b494a]  h-10 w-1/12"/>
    </nav>
    </>
);
}

export default Nav