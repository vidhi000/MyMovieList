import React from 'react'
import HeaderItem from './HeaderItem'
import Image from "next/image"
import {BadgeCheckIcon, 
  CollectionIcon, 
  HomeIcon,
   LightningBoltIcon,
    SearchIcon, 
    UserIcon,
  } from "@heroicons/react/outline"

const Header = () => {
  return (
    <>
     <header className='flex flex-col sm:flex-row m-5 justify-between justify-center'>
          <div className='flex flex-grow justify-evenly max-w-2xl'>
          <HeaderItem title="HOME" Icon = {HomeIcon}  />
          <HeaderItem title="TRENDING" Icon = {LightningBoltIcon}  />
          <HeaderItem title="VERIFIED" Icon = {BadgeCheckIcon}  />
          <HeaderItem title="COLLECTION" Icon = {CollectionIcon}  />
          <HeaderItem title="SEARCH" Icon = {SearchIcon}  />
          <HeaderItem title="ACTION" Icon = {UserIcon}  />
          </div>
          <Image src="https://mystreamdownloader.com/uploads/images/16494086759544702-img.jpg"
          width={100} height={60} className="mt-2"
          />
     </header>

    </>
  )
}

export default Header