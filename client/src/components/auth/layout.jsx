
import { Outlet } from 'react-router-dom';

function AuthLayout() {
    return(
        <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center w-2/5 px-12  bg-[url('https://img.freepik.com/premium-photo/woman-holding-bunch-colorful-bags-with-cell-phone-her-hand_616879-41588.jpg?w=740')] bg-cover bg-center h-screen   ">
        <div className="max-w-md space-y-6 text-center text-primary-foreground">
         
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
    )
}

export default AuthLayout;