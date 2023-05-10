import React from 'react';
import Link from 'next/link';
import { Inter } from '@next/font/google'
import { cookies } from 'next/headers'

const inter = Inter({
    subsets: ['latin'],
    display: 'optional',
})


const Page = () => {

    const newCookies = cookies();

    console.log(newCookies.set("cookie4", 4));

    return (
        <>
            <div>page</div>
            <Link className={inter.className} href="/about">about</Link>
            <Link href="/about?name=test&surname=surrtest">about 2</Link>
            <Link href={{
                pathname: '/about',
                query: {
                    name: "test",
                    surname: "surtest"
                }
            }}>
                about 3
            </Link>


        </>
    )
    
}

export default Page;


