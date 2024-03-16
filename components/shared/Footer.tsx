import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";


const Footer = () => {
  return (
    <footer className="border-t border-gray-700 p-4 bg-gray-900 text-white">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-2">
        <Link href={'/'} className="flex items-center gap-2 w-fit">
          <Image width={38} height={38} src="/images/logo.png" alt="meetup-logo" />
          <h1 className="text-3xl sm:font-semibold text-white font-semibold">meetup!</h1>
        </Link>

        <p className="text-gray-300 ">© 2024 <Link 
          className="text-blue-400 font-medium" 
          href={siteConfig.links.author} 
          target="_blank" rel="noopener noreferrer">Abhijay Rajvansh</Link>, All Right Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;