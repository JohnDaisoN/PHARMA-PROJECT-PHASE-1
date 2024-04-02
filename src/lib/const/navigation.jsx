import boxArrowRight from '../../assets/box-arrow-right.svg';
import gear from '../../assets/gear.svg';
import { BiHome, BiBarChartAlt2,BiCategoryAlt,BiCloudUpload,BiPieChartAlt2 } from "react-icons/bi";



export const DASHBOARD_SIDEBAR_LINKS =[
    
    {
        key: "home",
        label: "Home",
        path: "/",
        icon:<BiHome/>
    },
    {
        key: "dashboard",
        label: "Dashboard",
        path: "/dashboard",
        icon:<BiBarChartAlt2/>
    },
    {
        key: "fileUpload",
        label: "File Upload",
        path: "/fileupload",
        icon:<BiCloudUpload/>
    },
    {
        key: "analytics",
        label: "Analytics",
        path: "/analytics",
        icon: <BiPieChartAlt2/>
    },
    {
        key: "products",
        label: "Products",
        path: "/products",
        icon: <BiCategoryAlt/>
    },
    

]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: "settings",
        label: "Settings",
        path: "/settings",
        icon:gear
    },
    {
        key: "logout",
        label: "Logout",
        path: "/logout",
        icon:boxArrowRight
    },
   
]
