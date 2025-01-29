import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { Dialog, DialogContent } from "../ui/dialog";
import { Separator } from "../ui/separator";
import { useToast } from "@/hooks/use-toast";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { setProductDetails } from "@/store/shop/products-slice";


function ProductDetailsDialog({open,setOpen,productDetails}) {
    const dispatch = useDispatch();
    const user = useSelector(state =>state)
    const {toast} = useToast();
    function handleAddtoCart(getCurrentProductId) {
        console.log(getCurrentProductId);
        dispatch(addToCart({userId:user?.id,productId:getCurrentProductId,quantity: 1})).then(data => {
            if (data?.payload?.success) {
                dispatch(fetchCartItems(user?.id));
                        toast({
                            title : "Cart Item is updated"
                        })
                    
                
            }
        }
        )
        
    }

    function hangleDialogClose(params) {
        setOpen(false)
        dispatch(setProductDetails())
    }
    return(
        <Dialog open={open} onOpenChange={hangleDialogClose}>
<DialogContent className="grid grid-cols-2 gap-8 sm:p-12 max-w-[90vw] sm:max-w-[80vw] lg:max-w-[70vw]">
    <div className="relative overflow-hidden rounded-lg">
        <img src={productDetails?.image}
        alt={productDetails?.title}
        width={600}
        height={600}
        className="aspect-square w-full object-cover"
        />
    </div>
    <div className="">
        <div>
            <h1 className="text-3xl font-extrabold">{productDetails?.title}</h1>
            <p className="text-muted-foreground mt-4">{productDetails?.description}</p>
        </div>
        <div className="flex items-center justify-between mt-4">
            <p className={`text-3xl font-bold text-muted-foreground ${productDetails?.salePrice <  productDetails?.price ? "line-through" :null}`}> ${productDetails?.price}</p>
        {productDetails?.salePrice <  productDetails?.price  ?<p className="text-2xl font-bold text-Primary ">${productDetails?.salePrice}</p> :null}
        </div>
        <div className="mb-5 flex items-center justify-center">
            <Button onClick={() =>handleAddtoCart(productDetails?._id)} className="mr-12">Add To Cart</Button>
            <Button className="ml-12">Add To Cart</Button>
        </div>
            <Separator/>
    </div>
</DialogContent>
        </Dialog>
    )
    
}
export default ProductDetailsDialog;