import {  filterOptions } from "@/config";

import { Label } from "@radix-ui/react-dropdown-menu";
import { Fragment } from "react";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";

function ProductFilter(params) {
    return(
        <div className="bg-background rounded-lg shadow-sm">
            <div className="p-4 border-b">
                <h2 className="text-lg font-extrabold">Filters</h2>
            </div>
            <div className="p-4 space-y-4">
                {
                    Object.keys(filterOptions).map((keyItem) =>(
                        <Fragment>
                            <div >
                                <h3 className="test-base font-bold">{keyItem}</h3>
                                <div className="grid gap-2 mt-2">
                                    {filterOptions[keyItem].map(option =><Label className="flex items-center gap-2 font-medium">
                                        <Checkbox/>
                                        {option.Label}
                                    </Label>)}
                                </div>
                                <Separator/>
                            </div>
                        </Fragment>
                    )) 
                }
            </div>
        </div>
    )
}

export default ProductFilter;