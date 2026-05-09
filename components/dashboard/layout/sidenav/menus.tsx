import { BsGrid1X2Fill } from "react-icons/bs";
import { CiGrid42 } from "react-icons/ci";
import { FaGlobe } from "react-icons/fa";
import { HiViewGridAdd } from "react-icons/hi";
import { IoChevronDownSharp } from "react-icons/io5";

type SidenavMenuTypes = {
    title: string,
    menuTitle:{
        subTitle:string,
        icon: React.ReactNode,
        list?:{
            link:string,name:string
        }[]
    }[]
}[]

const sidenavMenu: SidenavMenuTypes = [
    {
        title:'Main menu',
        menuTitle:[
            {
                subTitle:'Dashboard',
                icon:<BsGrid1X2Fill/>,
                list:[
                    {link:'#',name:'admin dashboard'},
                    {link:'#',name:'doctor dashboard'},
                    {link:'#',name:'patient dashboard'}
                ]
            },
            {
                subTitle:'application',
                icon:<HiViewGridAdd />,
                list:[
                    {link:'#',name:'application 1'},
                    {link:'#',name:'application 2'},
                    {link:'#',name:'application 3'}
                ]
            },
            {
                subTitle:'Front end',
                icon:<FaGlobe />
            }
        ]
    },
    {
        title:'clinic',
        menuTitle:[
            {
                subTitle:'clinic Report',
                icon:<IoChevronDownSharp/>,
                list:[
                    {link:'#',name:'admin dashboard'},
                    {link:'#',name:'doctor dashboard'},
                    {link:'#',name:'patient dashboard'}
                ]
            },
            {
                subTitle:'application',
                icon:<IoChevronDownSharp/>,
                list:[
                    {link:'#',name:'application 1'},
                    {link:'#',name:'application 2'},
                    {link:'#',name:'application 3'}
                ]
            },
            {
                subTitle:'Front end',
                icon:<FaGlobe />
            }
        ]
    }
]

export default function Menus(){
    return(
        <>
        {
            sidenavMenu.map((items:SidenavMenuTypes[number],index:number)=>{
                return(
                    <>
                    <div className="space-y-3" key={index}>
            <div className="space-y-2">
            <div>
                <h3 className="text-sm text-neutral/30 capitalize">
                    {items.title}
                </h3>
            </div>
            {
                items.menuTitle.map((subItems,subIndex)=>{
                    return(
                        <>
                        <div className="space-y-3" key={subIndex}>
                <div className="flex justify-between items-center py-2 px-3 border border-neutral/10 rounded-xl">
                    <div className="flex flex-wrap items-center gap-[3.5px]">
                        <span className="text-base text-primary">
                            {subItems.icon}
                        </span>

                        <h4 className="text-lg text-primary font-bold capitalize">
                            {subItems.subTitle}
                        </h4>
                    </div>
                    
                    <span className="text-base text-primary">
                        <IoChevronDownSharp />
                    </span>
                </div>
                {
                    subItems.list ? 
                    <div className="px-[22px] overflow-y-auto transition-all duration-200 ease-linear min-h-[100px]">
                        <ul className="space-y-0.5">
                            {subItems.list.map((subItemsList,subItemsIndex)=>{
                                return(
                                    <li key={subItemsIndex} className="flex flex-wrap items-center gap-[6px] py-[5.5px]">
                            <span className="size-2 bg-primary rounded-full relative before:content-'' before:absolute before:h-2 before:w-px before:bg-neutral/10 before:-top-2.5 before:left-[3.6px] after:content-'' after:h-2 after:w-px after:bg-neutral/10 after:-bottom-2.5 after:left-[3.6px] after:absolute"></span>
                            <a href="" className="text-primary text-base font-medium capitalize">{subItemsList.name}</a>
                        </li>
                                )
                            })}
                        </ul>
                    </div>:
                    ''
                }
            </div>
                        </>
                    )
                })
            }
            
            </div>
        </div>
                    </>
                )
            })
        }

        </>
    )
}