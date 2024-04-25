import { Link as ScrollLink } from 'react-scroll';

export default function Navbar() {
    const items = [
        {name: 'Features', href: 'features'},
        {name: 'Download', href: 'download'},
        {name: 'Partners', href: 'partners'},
        {name: 'FAQ', href: 'faq'},
        {name: 'Contact', href: 'contact'},
        {name: 'Documentation', href: '/'},
    ]

    return (
        <nav className="gap-6 py-3 border border-white w-min rounded-3xl px-6 hidden md:flex">
            {items.map((item, index) => (
                <div key={index}>
                    <ScrollLink activeClass="active" smooth spy to={item.href} className='cursor-pointer'>
                        {item.name}
                    </ScrollLink>
                </div>
            ))}
        </nav>
    )
}