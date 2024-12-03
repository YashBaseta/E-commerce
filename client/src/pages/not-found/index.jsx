import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { RotateCcw } from "lucide-react";
  
import { useNavigate } from "react-router-dom";

function NotFound(params) {
const navigate = useNavigate()
    return(
        
        <Card className=" h-screen flex items-center justify-center flex-col ">
        <CardHeader >
          <CardTitle>page doesn't exists</CardTitle>
        </CardHeader>
        <CardContent >
        <Button  className="h-500 w-2000" onClick={()=>navigate('/auth/login')}>Redirect to login
        <RotateCcw />
        </Button>
        </CardContent>
       
      </Card>
      
    )
}

export default NotFound;