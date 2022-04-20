import React, {useCallback, useState} from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import SiteMenuContainer from '../../containers/SiteMenuContainer';

const Menu: React.FC = () => {
    const [open, setOpen] = useState(false);

    const onMenuToggle = useCallback(() => {
        setOpen(!open);
    }, [open]);

    return (
        <nav className={cn(styles.nav, {
            [styles.open]: open,
        })}>
            <button className={styles.menuButton}
                    type={'button'}
                    onClick={onMenuToggle}
            >
                <img src={'/icons/icon-hamburger.svg'}
                     alt={''}
                />
            </button>

            <div className={styles.menuBoxWrapper}>
                <div className={styles.menuBox}>
                    <SiteMenuContainer className={styles.siteMenuContainer} />
                    <button className={styles.contactButton}>
                        Contact
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Menu;
