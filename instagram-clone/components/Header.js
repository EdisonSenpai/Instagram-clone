import Image from 'next/legacy/image';
//import Profile from '../public/profile.jpeg';
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,    
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid"
import { useSession } from 'next-auth/react';

function Header() {
  const { data: session } = useSession();

  console.log(session);

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
        {/* Left */}
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
          <p>My</p>
        </div>

        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
          <p className="w-14 text-xs text-red-500 ml-[0.75px]">Album</p>
        </div>
        {/* Middle - Search input */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded">
            <div className="absolute insert-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-9 w-5 text-gray-500" />
            </div>
            <input 
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md" 
              type="text" 
              placeholder="Search" 
            />  
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />

          <div className="relative navBtn">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">3</div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />

          <img 
            src={session?.user?.image} 
            alt="profile-pic"
            className="h-10 w-10 rounded-full cursor-pointer"
          />  
        </div>
      </div>
    </div>
  )
}

export default Header;