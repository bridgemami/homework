import Head from 'next/head';
import Link  from 'next/link';

export default function Layout({children, home}) {
return (
    <div>
        <Head>
            <title>Module 4-Basic Next.js App</title>
        </Head>
        <main>{children}</main>
        {!home && (
            <Link href='/'>
                <a class ="btn btn-secondary mt-4">Back to Homepage</a>
            </Link>
        )}

    </div>
)
}