import { Icon } from "./ui";
import { DataLink } from './model';
import './index.scss';

const SocialMediaExternalLinks = () => {

    const links: DataLink[] = [
        { img: 'facebook', href: 'https://facebook.com', alt: 'Facebook external link' },
        { img: 'instagram', href: 'https://instagram.com', alt: 'Instagram external link' },
        { img: 'ok', href: 'https://ok.ru' },
        { img: 'vk', href: 'https://vk.com', alt: 'Vkontakte external link' },
    ];

    return (
        <div className="social_media_external_links">
            {links.map((element, index) => (
                <Icon 
                    href={element.href} 
                    img={require('./ui/assets/' + element.img + '.svg')} 
                    alt={element.alt ?? ''}
                    key={element.img + '_' + index}
                />
            ))}
        </div>
    );
}

export default SocialMediaExternalLinks;