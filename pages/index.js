import Layout from "../components/Layout";
import Banner from "../components/Banner";

export default function Index() {
  return(
    <body>

    <Layout className='layout'>
      <style jsx global>
        {`
        body {
          overflow-x: hidden;
          margin:auto;
        }

        @media screen and (max-width: 768px) {
          
          .logo {
            height: 30% !important;
            width: 30% !important;
            margin-bottom: 2em;
          }

          .textLogo {
            height: 75% !important;
            width: 75% !important;
          }

          .banner {
            padding: 0 10px
          }

          h1 {
            font-size: 4vw !important;
          }

          section {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            
          }

          #second {
            flex-direction: column-reverse
          }

          .demo {
            
          }

          .demoGif {
            min-width: 90vw
          }

          .dlContainer {
            margin-top: -3em;
            margin-bottom: -3em;
            
          }

          .download {
            display: flex;
            flex-direction: column;
          }

          .dlLogo {
            height: 65px
          }

          .dlp {
            font-size: 12px
          }

          article {
            width: 90vw;
            margin-bottom: 1em;
          }


        }

        body {
          background-color: #1c1f2c;
          font-family: helvetica;
        }
        
        .layout {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        p {
          font-size: 16px;
          color: white;
          line-height: 1.5;
        }

        h1, h2, h3 {
          color: white;
          line-height: 1.5;
        }

        h1 {
          font-size: 2vw;
          font-weight: lighter;
          text-shadow: 0 15px 15px black;
          margin-top: 100px;
        }

        h2 {
          font-size: 20px;
          text-shadow: 5px 10px 15px black;
        }
        
        .banner {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          margin-bottom: 100px;
          padding-top: 70px;
          margin-top: 35px
          
        }

        .logo {
          height: 15%;
          width: 15%;
          margin-bottom: 2em;
        }

        .textLogo {
          height: 40%;
          width: 40%;
        }


        .demo {
          background-color: #272b3d;
          display: flex;
          max-width: 100vw;
          padding: 10px;
          justify-content: center;
          flex-direction: column;
          margin-left: -15px;
          margin-right: -15px;
          text-align: center;
        }

        article {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-right: 4em;
          margin-left: 4em;
          margin-top: -10px;
          
        }
          
        code {
        font-family: Courier, 'New Courier', monospace;
        font-size: 12px;}

        #codeStyler {
          display: flex;
          justify-content: center;
          margin-top: 20px
          
        }
        pre {
          background-color: black;
          border-radius: 3px;
          width: 200px;
          padding: 0px 5px 5px
        }

        code {
          color: limegreen
        }

        .demoGif {
          width: 50%;
          height: 50%;
          box-shadow: 0 14px 25px 15px #1c1f2c;
          border-radius: 5px;
        }
        #demoGif2 {
          box-shadow: 0 14px 25px 15px #13141c;
        }

        #first, #second, #third {
          padding: 80px 25px 80px !important;
          
        }

        #first, #third {
          display: flex;
          padding: 10px 25px;
        }

        #third {
          display: flex;
          justify-content: space-between;
          margin-top: 10px
        }


        #second {
          display: flex;
          background-color: #1c1f2c;
          
          
          
          
        }

        .dlContainer {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-content: center;
          padding: 80px;
        }
        
        h3{
          align-self: center;
        }

        .download {
          align-self:center;
          width: 500px;
          display: flex;
          justify-content: space-between;
          padding: 25px 25px 0px 25px;
          text-align: center;
        }

        .dlp {
          
        }

        .mac {
          padding: 1em;
        }

        .windows {
          padding: 1em;
        }

        .linux {
          padding: 1em;
        }

        .dlLogo {
          max-height: 100px;
          max-width: 100px;
        }

        h3 {
          text-shadow: 5px 10px 15px black;
        }

        .footer {
          text-align:center;
          padding-bottom: 25px;
          margin-top: -25px;
        }

        h5 {
          color: gray;
          opacity: 0.5;
        }

        `}
      </style>
    </Layout>
    </body>
  )
}