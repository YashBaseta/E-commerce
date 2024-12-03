import { Link, Navigate, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { LogOut, Menu, ShoppingCart, UserCog } from "lucide-react";
import { shoppingViewHeaderMenuItems } from "@/config";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "@/store/auth-slice";


function HeaderRightContent(params) {
    const {user} = useSelector((state) =>state.auth)
    const navigate = useNavigate()
    const dispatch =useDispatch()
function handleLogout(params) {
    dispatch(logoutUser())
}
return<div className="flex lg:items-center lg:flex-row flex-col gap-4 ">
       <Button variant="outline" size="icon">
         <ShoppingCart className="w-10 h-10"/><span className="sr-only"> User Cart</span>
         
        </Button>
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            
          <Avatar className="bg-black">
            <AvatarFallback className="bg-black text-white font-extrabold">
              {user?.userName[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" className="w-56 bg-white">
          <DropdownMenuLabel className="ml-3">Logged in as {user?.userName}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex  mt-2 " onClick={()=>navigate('/shopping/account')} >
            <UserCog className="mr-2 h-4 w-4 ml-3 " />
            <p>Account</p>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex mt-2 " onClick={handleLogout} >
            <LogOut className="mr-2 h-4 w-4 ml-3"/>
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
}

function MenuItems(params) {
    return<nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
        {
            shoppingViewHeaderMenuItems.map(menuItem =><Link className="text-sm font-medium" key={menuItem.id} to={menuItem.path}>{menuItem.label}</Link>)
        }
    </nav>
    
}

function ShoppingHeader(params) {
    return(
       <header className="sticky top-0 z-40 w-full border-b bg-background">
<div className="flex h-16 items-center justify-between px-4 md:px-6">
<Link to="/shopping/home" className="flex items-center gap-2">
<img src="../../src/assets/image.png" alt="logo" className="h-10 w-10" />
<span className="font-bold">UrbanBazaar</span>
</Link>
<Sheet>
    <SheetTrigger asChild>
<Button variant="outline" size="icon" className="lg:hidden">
    <Menu className="h-10 w-10"/>
    
    <span className="sr-only">toggle header menu</span>
</Button>
    </SheetTrigger>
    <SheetContent side="left" className="w-full max-w-xs">
<MenuItems/>
<HeaderRightContent/>


    </SheetContent>
</Sheet>
<div className="hidden lg:block"><MenuItems/></div>
<div className="hidden lg:block"><HeaderRightContent/></div>
</div>

       </header>
    )
}

export default ShoppingHeader;