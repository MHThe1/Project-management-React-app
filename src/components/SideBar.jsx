import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from 'react-icons/fa';

export default function SideBar() {
    return (
        <div className="top-0 left-0 ml-2 h-auto w-16
                        flex flex-col rounded-xl
                        bg-gray-100 text-gray-900
                        dark:bg-neutral-950 dark:text-white shadow-lg">
            
            <SideBarIcons icon={<FaFire size="28" />} />
            <SideBarIcons icon={<BsPlus size='32' />} />
            <SideBarIcons icon={<BsFillLightningFill size='20' />} />
            <SideBarIcons icon={<FaPoo size='20' />} />
        </div>
    )
}

function SideBarIcons({ icon, text='tooltip ' }) {
    return( 
        <div className="sidebar-icon group">
        {icon}

        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
    )
}