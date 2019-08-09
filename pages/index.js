import Layout from "../components/Layout";
import Banner from "../components/Banner";

export default function Index() {
  return(
    <body>

    <Layout className='layout'>
      <style jsx global>
        {`
        body {
          background-color: #1c1f2c;
          font-family: helvetica;
        }
        
        .layout {
          display: flex;
          flex-directin: column;
          justify-content: center;
        }

        p {
          font-size: 16px;
          color: white;
        }

        h1, h2, h3 {
          color: white;
        }

        h1 {
          font-size: 30px;
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
          margin-bottom: 90px;
          padding-top: 30px;
          margin-top: 35px
        }

        .logo {
          height: 15%;
          width: 15%;
        }

        .textLogo {
          height: 40%;
          width: 40%;
        }
        @media screen and (max-width: 768px) {
          
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
          margin-right: 30px;
          margin-left: 30px;
          margin-top: -10px
        }
          
        code {
        font-family: Courier, 'New Courier', monospace;
        font-size: 12px;}

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
          padding: 25px 25px !important
        }

        #first, #third {
          display: flex;
          padding: 10px 25px;
        }

        #third {
          margin-top: 10px
        }

        #second {
          display: flex;
          background-color: #1c1f2c;
          margin-left: -15px;
          margin-right: -15px;
          padding: 20px 25px;
          
        }

        .dlContainer {
          
          display: flex;
          justify-content: center;
        }

        .download {
          width: 500px;
          display: flex;
          justify-content: space-between;
          padding: 25px;
          text-align: center;
        }

        .dlp {
          
        }

        .mac {
        }

        .windows {

        }

        .linux {

        }

        .dlLogo {
          max-height: 100px;
          max-width: 100px;
        }

        .footer {
          text-align:center;
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