import React, { useState } from 'react';


// assets
import { CgSearch } from 'react-icons/cg';
import { FiPlus } from 'react-icons/fi';
import logo from '../../assets/logo.png';

// stylesheet
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [query, setQuery] = useState("");

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    return (
        <div style={{
            display: 'flex',
            width: '100vw',
            justifyContent: 'center',
            alignItems: 'center',
            height: "8vh"
        }}>
            <div className={styles.navbarContainer}>
                <div className={styles.leftContainer}>
                    <Link to="/">
                        <img className={styles.logo} src={logo} alt='logo' />
                    </Link>
                </div>
                <div className={styles.middleContainer}>
                    <form className={styles.form} onSubmit={() => { }}>
                        <input
                            type="text"
                            className={styles.searchQuery}
                            name='search'
                            placeholder='Search...'
                            value={query}
                            onChange={handleChange}
                            autoComplete='on'
                        />
                        <div style={{
                            width: '2px',
                            height: "4vh",
                            backgroundColor: "#ccc"
                        }}></div>
                        <button className={styles.querySubmit} type='submit'>
                            <CgSearch className={styles.icon} />
                        </button>
                    </form>
                </div>
                <div className={styles.rightContainer}>
                    <FiPlus className={styles.icon} />
                    <Link
                        to="/upload"
                        style={{
                            textDecoration: 'none',
                            color: '#111'
                        }}
                    >
                        <h5>upload</h5>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar