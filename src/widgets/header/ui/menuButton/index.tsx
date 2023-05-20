import classes from './index.module.scss';

type Props = {
    setIsOpenMenu: Function,
    isOpenMenu: boolean,
}

const MenuButton = ({setIsOpenMenu, isOpenMenu}: Props) => {
    return (
        <div onClick={() => setIsOpenMenu(!isOpenMenu)} className={classes.header_menu_button}>
            <div/>
        </div>
     );
}
 
export default MenuButton;