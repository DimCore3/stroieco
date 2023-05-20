import { useState } from "react";
import './index.scss';
import LogoWithText from 'entities/logoWithText';
import { PhoneMapInfoAllBranch, PhoneMapInfoCallOrder, SocialMediaExternalLinks } from 'features';
import { MenuButton } from "./ui";
import ListLinks from "entities/listLinks";

const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    
    return (
        <header className='main_header'>
            <div className='header_upper'>
                <LogoWithText />
                {!isOpenMenu &&
                    <>
                        <div className="phone_map_info_header">
                            <PhoneMapInfoAllBranch data='Воронеж, Монтажный проезд, 7' />
                            <PhoneMapInfoCallOrder data='+7(999)988-64-11' />
                        </div>
                        <SocialMediaExternalLinks addClasses="max_width_1100_display_none" />
                    </>
                }
                <MenuButton setIsOpenMenu={setIsOpenMenu} isOpenMenu={isOpenMenu} />
            </div>
            {isOpenMenu && <div className='menu_container'> <ListLinks title="faf" links={[{name:'fdsaf', link:'./fdsaf'}]}/> </div>}
        </header>
    );
}

export default Header;