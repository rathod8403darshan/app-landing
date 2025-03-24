import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
    return (
        <Html>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <body>
            <div
              id="preloader"
            />
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}   




// import Document, { Html, Main, NextScript } from "next/document";
// import Head from "next/head";
// import {preloader as HTMLPreloader} from '../styles/preloader/preloader'

// class MyDocument extends Document {
//     render() {
//       return (
//         <Html>
//           <Head>
//             <link rel="preconnect" href="https://fonts.googleapis.com" />
//             <link rel="preconnect" href="https://fonts.gstatic.com" />
//             <link
//               href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap"
//               rel="stylesheet"
//             />
//             <link rel="icon" href="/logo.jfif" />
//           </Head>
//           <body style={{ display: 'block', margin: 0, overflow: 'hidden' }}>
//             <div
//               id="preloader"
//               dangerouslySetInnerHTML={{ __html: HTMLPreloader }}
//             />
//             <Main />
//             <NextScript />
//           </body>
//         </Html>
//       );
//     }
//   }
  
//   export default MyDocument;