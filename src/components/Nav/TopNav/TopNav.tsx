import Link from 'next/link';

const TopNavBar = () => {
    return (
        <nav className="top-nav">
            <span className="name">Devon Claiche</span>
            <div className="links">
                {/* Update the Link components as follows */}
                <Link href="https://www.instagram.com" passHref>Instagram</Link>
                <Link href="https://github.com" passHref>GitHub</Link>
                <Link href="https://linkedin.com" passHref>LinkedIn</Link>
                {/* Dropdown Menu Logic Here */}
            </div>
        </nav>
    );
};

export default TopNavBar;

