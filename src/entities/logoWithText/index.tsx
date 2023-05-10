import Logo from 'shared/ui/logo';
import classes from './index.module.scss';

const LogoWithText = () => {
    return ( 
        <div className={classes.logo_with_text}>
            <Logo />
            <div className={classes.line}></div>
            <h3>Материалы для ландшафтного дизайна и озеленения</h3>
        </div>
     );
}
 
export default LogoWithText;