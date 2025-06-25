"use client";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Dropdown = ({ options,onValueChange ,placeholder }) => {
    return (

        <Select
          onValueChange={(value) => {onValueChange(value)}}
        >
          <SelectTrigger className="w-full md:w-1/4">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {
                options.map((item,id)=>{
                    return <SelectItem key={id} value={item}>{item}</SelectItem>; 
                })
            }
            
          </SelectContent>
        </Select>

    )
}

export default Dropdown;