import Header from '../UI/Header/Header'
import SideNav from '../UI/SideNav/SideNav'

const MainLayout = (props) => {
    return(<div style={{
        background: 'rgb(0,0,0)',
        background: 'linear-gradient(135deg, rgba(0,0,0,.7) 11%, rgba(91,55,88,.7) 100%)'
    }}>
    <Header/>
    <SideNav/>
    <section className="content-container">
        {props.children}
        </section>
       </div> )
}


export default MainLayout