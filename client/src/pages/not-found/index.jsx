import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function NotFound(params) {
const navigate = useNavigate()
    return(
        <div>page doesn't 
            
        <Button onClick={()=>navigate('/auth/login')}>R</Button>
        </div>
    )
}

export default NotFound;