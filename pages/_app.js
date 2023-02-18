import Head from '../utils/head'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  
  return (
      <div className=''>
        <Head title="Al Watania Poultry"/>
        <Component {...pageProps}   />    
      </div>
  )
  
}


export default MyApp
