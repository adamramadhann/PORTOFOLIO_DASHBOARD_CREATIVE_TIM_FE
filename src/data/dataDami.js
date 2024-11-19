    import { MdDashboard, MdShowChart, MdWidgets } from 'react-icons/md';      // Untuk MdDashboard
    import { FaRegImage } from 'react-icons/fa';        // Untuk FaRegImage
    import { LuGrid } from 'react-icons/lu';            // Untuk LuGrid
    import { FaFileAlt } from 'react-icons/fa';         // Untuk FaFileAlt
    import { SiGooglemaps } from 'react-icons/si';      // Untuk SiGooglemaps
    import { FaTableCells } from 'react-icons/fa6';
    import { SlCalender } from 'react-icons/sl';
    import Buttons from '../page/sub_component/Buttons';
    import GridSystem from '../page/sub_component/GridSystem';
    import Icons from '../page/sub_component/Icons';
    import Notification from '../page/sub_component/Notification';
    import Panels from '../page/sub_component/Panels';
    import Typography from '../page/sub_component/Typography';
    import ExtendedForms from '../page/sub_form/ExtendedForms';
    import Validation from '../page/sub_form/Validation';
    import FullScreenMaps from '../page/sub_map/FullScreenMaps';
    import VectorMap from '../page/sub_map/VectorMap';
    import ErrorPage from '../page/sub_page/ErrorPage';
    import LockScreenPage from '../page/sub_page/LockScreenPage';
    import LoginPage from '../page/sub_page/LoginPage';
    import PricingPage from '../page/sub_page/PricingPage';
    import RtlSupport from '../page/sub_page/RtlSupport';
    import TimelinePage from '../page/sub_page/TimelinePage';
    import UserProfile from '../page/sub_page/UserProfile';
    import RegisterPage from '../page/sub_page/RegisterPage';
    import ExtendedTables from '../page/sub_tables/ExtendedTables';
    import ReactTables from '../page/sub_tables/ReactTables';
import GogleMaps from '../page/sub_map/GogleMaps';
import SweetALert from '../page/sub_component/SweetALert';
import TableReguler from '../page/sub_tables/TableReguler';
import FormReguler from '../page/sub_form/FormReguler';





    export const dataSideBar = [
        {
            judul : "Dashboard",
            icon : MdDashboard  
        },
        {
            icon : FaRegImage,
            judul : "Pages",
            subJudul : [
                {
                    path_route : "/Pricing",
                    label : "Pricing page"
                },
                {
                    path_route : "/rtl",
                    label : "RTL Support"
                },
                {
                    path_route : "/Timeline",
                    label : "Timeline Page"
                },
                {
                    path_route : "/Login",
                    label : "Login Page"
                },
                {
                    path_route : "/Register",
                    label : "Register Page"
                },
                {
                    path_route : "/Lock",
                    label : "Lock Screen Page"
                },
                {
                    path_route : "/User",
                    label : "User Profile"
                },
                {
                    path_route : "/Error",
                    label : "Error Page"
                }
            ]
        },
        {
            icon : LuGrid,
            judul : "Components",
            subJudul : [
                {
                    path_route : "/Buttons",
                    label : "Buttons"
                },
                {
                    path_route : "/Grid",
                    label : "Grid System"
                },
                {
                    path_route : "/Panels",
                    label : "Panels"
                },
                {
                    path_route : "/Sweet",
                    label : "Sweet Alert"
                },
                {
                    path_route : "/Notification",
                    label : "Notification"
                },
                {
                    path_route : "/Icons",
                    label : "Icons"
                },
                {
                    path_route : "/Typography",
                    label : "Typography"
                }
            ]
        },
        {
            icon : FaFileAlt,
            judul : "Forms",
            subJudul : [
                {
                    path_route : "/RegularForms",
                    label : "Reguler Forms"
                },
                {
                    path_route : "/Extended",
                    label : "Extended Forms"
                },
                {
                    path_route : "/Validation",
                    label : "Validation Froms"
                },
                {
                    path_route : "/Wizard",
                    label : "Wizard"
                },
            ]
        },
        {
            icon : FaTableCells,
            judul : "Tables",
            subJudul : [
                {
                    path_route : "/Regular",
                    label : "Regular Tables"
                },
                {
                    path_route : "/Extended",
                    label : "Extended Tables"
                },
                {
                    path_route : "/React",
                    label : "React Tables"
                }
            ]
        },
        {
            icon : SiGooglemaps,
            judul : "Maps",
            subJudul : [
                {
                    path_route : "/Gogle",
                    label : "Gogle Maps"
                },
                {
                    path_route : "/Fullscren",
                    label : "Fullscren Maps"
                },
                {
                    path_route : "/Vector",
                    label : "Vector Map"
                }
            ]
        },
        {
            judul : "Widgets",
            icon : MdWidgets
        },
        {
            judul : "Charts",
            icon : MdShowChart
        },
        {
            judul : "Calender",
            icon : SlCalender
        },
    ]

    export const routeSubJudul = [
        {   
            key: "components",
            sub_judul: [
                { path: "/Buttons", judul: Buttons },
                { path: "/Grid", judul: GridSystem },
                { path: "/Icons", judul: Icons },
                { path: "/Notification", judul: Notification },
                { path: "/Panels", judul: Panels },
                { path: "/Sweet", judul: SweetALert },
                { path: "/Typography", judul: Typography },
            ]
        },
        {   
            key: "sub_form",
            sub_judul: [
                { path: "/Extended", judul: ExtendedForms },
                { path: "/RegularForms", judul: FormReguler },
                { path: "/Validation", judul: Validation },
            ]
        },
        {   
            key: "sub_map",
            sub_judul: [
                { path: "/Gogle", judul: GogleMaps },
                { path: "/Fullscren", judul:  FullScreenMaps },
                { path: "/Vector", judul: VectorMap }
            ]
        },
        {   
            key: "sub_page",
            sub_judul: [
                { path: "/Error", judul: ErrorPage },
                { path: "/Lock", judul: LockScreenPage },
                { path: "/Login", judul: LoginPage },
                { path: "/Pricing", judul: PricingPage },
                { path: "/rtl", judul: RtlSupport },
                { path: "/Timeline", judul: TimelinePage },
                { path: "/User", judul: UserProfile },
                { path: "/Register", judul: RegisterPage },
            ]
        },
        {   
            key: "sub_tables",
            sub_judul: [
                { path: "/Extended", judul: ExtendedTables },
                { path: "/React", judul: ReactTables },
                { path: "/Regular", judul: TableReguler }
            ]
        }
    ];


    export const cardDashboard =[
        {bgColor : "orange", judul : "Used Space", subtitle : '49/50 GB', information : "Get more space" },
        {bgColor : "green", judul : "Used Space", subtitle : '49/50 GB', information : "Get more space" },
        {bgColor : "red", judul : "Used Space", subtitle : '49/50 GB', information : "Get more space" },
        {bgColor : "blue", judul : "Used Space", subtitle : '49/50 GB', information : "Get more space" },
    ]