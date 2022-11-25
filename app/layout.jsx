import { Roboto } from '@next/font/google';
import modules from './layout.module.scss'
const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

export default function layout({ children }) {
    return (
        <html className={roboto.className}>
            <head>
                <title>My Next App</title>
            </head>
            <body className={modules.body}>
                <nav>Navbar</nav>
                {children}
            </body>
        </html>
    )
}