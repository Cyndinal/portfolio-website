import React from 'react';
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

function ChooseService() {
    return (
        <div>
            <Select>
                <SelectTrigger className="w-[250px]">
                    <SelectValue placeholder="Select a Service"/>
                </SelectTrigger>
                <SelectContent className={'bg-secondary outline-none'}>

                    <SelectGroup>
                        <SelectItem
                            value={"Web"} className={"hover:bg-secondaryRed rounded-md"}>
                            Frontend Development
                        </SelectItem>

                        <SelectItem value={"Backend"}
                                    className={"hover:bg-secondaryRed rounded-md"}>
                            Backend Development</SelectItem>

                        <SelectItem value={"Full"}
                                    className={"hover:bg-secondaryRed rounded-md"}>
                            FullStack Development
                        </SelectItem>

                        <SelectItem value={"SEO"} className={"hover:bg-secondaryRed rounded-md"}>
                            Search Engine Optimisation(SEO)
                        </SelectItem>

                        <SelectItem value={"Design"} className={"hover:bg-secondaryRed rounded-md"}>
                            Logo Design
                        </SelectItem>

                    </SelectGroup>

                </SelectContent>

            </Select>

        </div>
    );
}

export default ChooseService;