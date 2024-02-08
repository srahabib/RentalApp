import { Divide } from "lucide-react";
import React from "react";
import Search from "../components/Search/Search";
import HouseBlock from "../components/HouseBlock/HouseBlock";
import Pagination from "../components/Pagination/Pagination";


const SearchPage = () => {

    return (
        <div className="p-10">
            <Search />

        <div>
            <HouseBlock/>
            <HouseBlock/>
        </div>
        <Pagination/>   
        </div>
        
    
    );
    }

export default SearchPage;