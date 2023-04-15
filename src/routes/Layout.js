import { Outlet } from 'react-router-dom'

//Store this in the component otherwise we'd have to wait for a fetch request to return the data
//Not a problem in a local env but on prod would be very bad
const menuItems = {
    "data":[
       {
          "title":"Home",
          "url":"/"
       },
       {
          "title":"Drivers",
          "url":"/drivers"
       },
       {
          "title":"Vehicles",
          "url":"/vehicles"
       },
       {
          "title":"About",
          "url":"/about"
       }
    ]
 }

const Layout = () => {
    return (
        <>
            <div className="title-bar">
                <img src="logo.png" alt="Logistics UK Logo"/>
            </div>
            <div className='router-container'>
                <div className="side-bar">
                    {
                        menuItems.data.map((element, index) => {
                            return (
                                <a key={index} href={`${element.url}`}>{element.title}</a>
                            )
                        })
                    }
                </div>
                <div className='router-renderer'>
                    <Outlet/>
                </div>
            </div>
        </>
    )
};

export default Layout;