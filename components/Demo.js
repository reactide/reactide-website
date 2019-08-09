import gif from '../assets/images/reactide-screenshot2.png';
import demo from '../assets/images/reactide-demo.png';
import demo2 from '../assets/images/reactide-demo2.png';
import demo3 from '../assets/images/reactide-demo3.png';
import demo4 from '../assets/images/reactide-demo4.png';
export default function Demo() {
  return (
    <div className='demo'>
      <section id='first'>
        <article>
          <h2>An extensible developer environment in one click</h2>
          <p>
            Get right to coding. Reactide runs an integrated Node server and custom browser simulator eliminating the need to configure any servers, build-tools, and even offers hot module reloading right out of the box. This makes projects build-tool agnostic, allowing for only necceary dependancies to be added later as projects evolve as opposed to making decisions when the coding hasn’t even begun.
          </p>
        </article>
        <img src={demo} className='demoGif' />
      </section>

    <section id='second'>
      <img src={demo4} className='demoGif' id='demoGif2' />
      <article>
        <h2>Streamlined configurations.</h2>
        <p>
        Save time on setting up configurations through Reactide's built-in NPM package that automates most of the process for you. All that is needed for getting started is to change the .js and .html entry points inside Reactide's universal configuration. Once those entry points are changed, go ahead and run:
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
        <h2>State flow visualization.</h2>
        <p>
        Components are the base unit of React and managing state across a complex web of components is often the most mentioned pain point of developing React apps. Reactide offers the first visual editing solution for today's most powerful visual UI engine. By navigating through a live-representation of your app’s architecture, developers can now quickly identify and jump to relevant components and edit them on the fly.
        </p>
      </article>
    <img src={demo3} className='demoGif' />
    </section>
    </div>
  )
}