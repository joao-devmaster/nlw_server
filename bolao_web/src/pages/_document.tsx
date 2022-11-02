import { Html, Head, Main, NextScript } from "next/document";

export default function Document(){
    return(
        <html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
            </Head>
            <body className="bg-black bg-app bg-no-repeat bg bg-cover">
            <Main/>
            <NextScript/>
            </body>
            
        </html>
    )
}