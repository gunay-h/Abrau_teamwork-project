import Awards from './Awards'
import Header from './Header'
import Main from './Main'


export default function About(prop) {
  return (
    <section className='aboutmain'>
      <Header />
      <Main />
      <Awards awards={prop.awards} />
    </section>
  )
}
