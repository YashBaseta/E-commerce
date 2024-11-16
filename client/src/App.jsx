import { Route, Routes } from 'react-router-dom';
import AuthLayout from "./components/auth/layout"
import AuthLogin from "./pages/auth/login"
import AuthRegister from "./pages/auth/register"
import AdminDashboard from './pages/admin-view/dashboard';
import AdminLayout from './components/admin-view/layout';
import AdminProducts from './pages/admin-view/products';
import AdminOrders from './pages/admin-view/orders';
import ShoppingLayout from './components/shopping-view/layout';
import NotFound from './pages/not-found';
import ShoppingHome from './pages/shopping-view/home';
import ShoppingCheckout from './pages/shopping-view/checkout';
import ShoppingAccount from './pages/shopping-view/account';
import ProductList from './pages/shopping-view/productlist';
import CheckAuth from './components/common/check-auth';
import UnauthPage from './pages/unauth-page';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { checkAuth } from './store/auth-slice';
import { Skeleton } from "@/components/ui/skeleton"


function App() {
  const {user,isAuthenticated ,isLoading } = useSelector((state) => state.auth);
  
  const dispatch = useDispatch()
  useEffect(() =>{
dispatch(checkAuth())
  },[dispatch])
  if(isLoading) return<Skeleton className=" bg-black w-[8000px] h-[800px] align-middle " />


//   console.log(user)

  return (
    <div className="flex flex-col overflow-hidden bg-white">

      <Routes>
        <Route path="/auth" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}>       <AuthLayout />      </CheckAuth>}>
          <Route path='login' element={<AuthLogin />} />
          <Route path='Register' element={<AuthRegister />} />
        </Route>

        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
     
        </Route>

        <Route path='/shopping' element={<CheckAuth isAuthenticated={isAuthenticated} user={user}>      <ShoppingLayout />    </CheckAuth>}>
          <Route path='home' element={<ShoppingHome />} />
          <Route path='checkout' element={<ShoppingCheckout />} />
          <Route path='account' element={<ShoppingAccount />} />
          <Route path='productlist' element={<ProductList />} />


        </Route>
<Route path='/unauth-page' element={<UnauthPage/>}/>

<Route path='*' element={<NotFound />}/> 
        




      </Routes>
    </div>

  )
}

export default App
