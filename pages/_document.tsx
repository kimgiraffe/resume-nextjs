import Document, { Head, Main, NextScript } from 'next/document';

export default class ResumeDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          {/* Step 5: Output the styles in the head  */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/reactstrap/6.0.1/reactstrap.min.js"></script>
          <link href="https://fonts.googleapis.com/earlyaccess/notosanskr.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Parisienne&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
