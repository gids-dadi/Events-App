import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import NavItems from "./NavItems";

export default function MobileNav() {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src="/assets/icons/menu.svg"
            alt="Menu Icon"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 md:hidden">
          <Image
            src="/assets/images/logo.svg"
            alt="Event App Logo"
            width={128}
            height={36}
          />
          <Separator className="border border-gray-50 " />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
}