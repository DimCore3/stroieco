import Logo from 'shared/ui/logo';
import classes from './index.module.scss';

const LogoWithText = ({text = 'Материалы для ландшафтного дизайна и озеленения'}: {text?:string}) => {
    return (
        <div className={classes.logo_with_text}>
            <Logo />
            <div className={classes.logo_text}>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default LogoWithText;