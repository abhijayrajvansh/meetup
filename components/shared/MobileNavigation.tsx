import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Separator } from "@/components/ui/separator"
import Navigationbar from "./Navigationbar";



const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <HiOutlineMenuAlt3 className="text-3xl" />
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-6">
        <h1 className="text-3xl sm:font-semibold text-red-500 font-bold">meetup!</h1>
        <Separator />
          <Navigationbar />
      </SheetContent>
    </Sheet>

  )
}

export default MobileNavigation;