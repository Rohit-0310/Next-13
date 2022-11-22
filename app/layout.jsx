import { Roboto } from '@next/font/google';

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
            <body>
                <nav>Navbar</nav>
                {children}
            </body>
        </html>
    )
}