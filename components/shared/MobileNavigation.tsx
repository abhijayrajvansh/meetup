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



const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger>BurgerIcon</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>
            
            <div>option 1</div>
            <div>option 2</div>
            <div>option 3</div>

          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>

  )
}

export default MobileNavigation;