import { Button } from '@/components/ui/button'
import banner1 from '../../assets/banner-1.jpg'
import banner2 from '../../assets/banner-2.jpg'
import banner3 from '../../assets/banner-3.jpg'
import { BabyIcon, ChevronLeft, ChevronRight, CloudLightning, ShirtIcon, UmbrellaIcon, WatchIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllFilteredProducts, fetchProductDetails } from '@/store/shop/products-slice'
import ShoppingProductTile from '@/components/shopping-view/Product-tile'
import { useNavigate } from 'react-router-dom'
import { addToCart, fetchCartItems } from '@/store/shop/cart-slice'
import { useToast } from '@/components/ui/use-toast'
import ProductDetailsDialog from '@/components/shopping-view/Product-details'

const categoriesWithIcon = [
    { id: "men", label: "Man", icon: ShirtIcon },
    { id: "women", label: "Women", icon: CloudLightning },
    { id: "kids", label: "Kids", icon: BabyIcon },
    { id: "accessories", label: "Accessories", icon: WatchIcon },
    { id: "footwear", label: "Footwear", icon: UmbrellaIcon },
];
function ShoppingHome(params) {
    const slides = [banner1, banner2, banner3];
    const dispatch = useDispatch();
    const { productList,productDetails } = useSelector(state => state.shopProducts);
    const [openDetailsDialog,setOpenDetailsDialog]=useState(false)
    const { user } = useSelector(state => state.auth);
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate=useNavigate();
    const {toast} = useToast();



function handleNavigateToListingPage(getCurrentItem,section) {
    sessionStorage.removeItem('filters');
    const currentFilter = {
        [section] : [getCurrentItem.id]
    }
    sessionStorage.setItem('filters',JSON.stringify(currentFilter))
    navigate(`/shopping/productlist`)
}

function handleGetProducDetails(getCurrentProductId) {
   
    dispatch(fetchProductDetails(getCurrentProductId))
    
}
function handleAddtoCart(getCurrentProductId) {
 
    dispatch(addToCart({userId:user?.id,productId:getCurrentProductId,quantity: 1})).then(data => {
        if (data?.payload?.success) {
            dispatch(fetchCartItems(user?.id))
                    toast({
                        title : "Cart Item is updated"
                    })
        }
    }
    )
    
}

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length)
        }, 5000)
        return () => clearInterval(timer);
    })

    useEffect(() => {
        dispatch(fetchAllFilteredProducts({ filterParams: {}, sortParams: 'price-lowtohigh' }))
    }, [dispatch])

  


    useEffect(() => {
        if (productDetails !== null) setOpenDetailsDialog(true) 
          },[productDetails])
    return (
        <div className="flex flex-col min-h-screen">
            <div className="relative w-full h-[600px] overflow-hidden">
                {slides.map((slide, index) => (<img
                    src={slide}
                    key={index}
                    className={`${index === currentSlide ? 'opacity-100' : 'opacity-0'} absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000`}
                />))}
                <Button variant="outline" onClick={() => setCurrentSlide(prevSlide => (prevSlide - 1 + slides.length) % slides.length)} size="icon" className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/800'>
                    <ChevronLeft className='w-4 h-4' />
                </Button>
                <Button variant="outline" onClick={() => setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length)} size="icon" className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/800'>
                    <ChevronRight className='w-4 h-4' />
                </Button>
            </div>
            <section className='py-12 bg-gray-50 '>
                <div className='container mx-auto px-4'>
                    <h2 className='text-3xl font-bold text-center mb-8'>
                        Shop By Category
                    </h2>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                        {
                            categoriesWithIcon.map(categoryItem => <Card onClick={() => handleNavigateToListingPage(categoryItem,'category')} className='cursor-pointer hover:shadow-lg transition-shadow'>
                                <CardContent className=" flex flex-col items-center justify-center p-6 ">
                                    <categoryItem.icon className='w-12 h-12 mb-4 text-primary' />
                                    <span className='font-bold '>{categoryItem.label}</span>
                                </CardContent>

                            </Card>)
                        }
                    </div>

                </div>
            </section>
            <section className='py-12'>
            <div className='container mx-auto px-4'>
                    <h2 className='text-3xl font-bold text-center mb-8'>
                        Feature Products
                    </h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                        {
                            productList && productList.length > 0 ?
                            productList.map((productItem) => (
                                <ShoppingProductTile handleAddtoCart={handleAddtoCart} handleGetProducDetails={handleGetProducDetails} product={productItem}/>
                            ))  :null
                        }
                    </div>
                    </div>
            </section>
            < ProductDetailsDialog open={openDetailsDialog} setOpen={setOpenDetailsDialog} productDetails={productDetails} />


        </div>
    )
}

export default ShoppingHome;