import demo from '/Users/ep/Codesmith/reactide-website/assets/images/reactide-demo.png';
import demo3 from '/Users/ep/Codesmith/reactide-website/assets/images/reactide-demo3.png';
import demo4 from '/Users/ep/Codesmith/reactide-website/assets/images/reactide-demo4.png';

export default function Demo() {
  return (
    <div className='demo'>
      <section id='first'>
        <article>
          <h2>An extensible developer environment in one click</h2>
          <p>
            Reactide runs an integrated Node server and custom browser simulator eliminating the need to configure any servers, build-tools, and even offers hot module reloading right out of the box.
          </p>
        </article>
        <img src={demo} className='demoGif' />
      </section>

    <section id='second'>
      <img src={demo3} className='demoGif' id='demoGif2' />
      <article>
        <h2>Streamlined configurations</h2>
        <p>
       To get started, just input your .js and .html entry points inside Reactide's universal configuration. Once those entry points are changed, go ahead and run:
        <div id="codeStyler">
          <pre>
            <code>npm run reactide-server</code>
          </pre>
        </div>
        </p>
      </article>
    </section>

    <section id='third'>
      <article>
        <h2>Components visualization</h2>
        <p>
        Navigate through a live-representation of your app’s architecture.
        </p>
      </article>
    <img src={demo4} className='demoGif' id='thirdGif'/>
    </section>
    </div>
  )
}