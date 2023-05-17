import { useState } from "react";
import classes from './index.module.scss';
import LogoWithText from 'entities/logoWithText';
import { PhoneMapInfoAllBranch, PhoneMapInfoCallOrder, SocialMediaExternalLinks } from 'features';

const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    return (
        <header className={classes.main_header}>
            <div className={classes.header_upper}>
                <LogoWithText />
                {!isOpenMenu &&
                    <>
                        <PhoneMapInfoAllBranch data='Воронеж, Монтажный проезд, 7' />
                        <PhoneMapInfoCallOrder data='+7(999)988-64-11' />
                        <SocialMediaExternalLinks />
                    </>
                }
                <button onClick={() => setIsOpenMenu(!isOpenMenu)}>|||</button>
            </div>
            {isOpenMenu && <div className={classes.menu_container}> text text text </div>}
        </header>
    );
}

export default Header;