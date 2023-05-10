import classes from './index.module.scss';
import { DataLink } from '../../model';

const Icon = ({ href, img, alt = '' }: DataLink) => {
    return (
        <div className={classes.external_link_div}>
            <a href={href}>
                <img src={img} alt={alt} />
            </a>
        </div>
    );
}

export default Icon;