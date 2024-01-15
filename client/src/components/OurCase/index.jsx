import { useEffect, useState } from "react"
import "./index.scss"
import axios from "axios"
import Service from "../Service"

const OurCase = () => {
    const [services, setServices] = useState(null)
    const getAllServices = async ()=>{
        const resp = await axios("http://localhost:3000/")
        setServices(resp.data)
    }
    useEffect(() => {
        getAllServices()
    }, [])
    
  return (
    <section id="OurCase">
        <div className="container">
        <div className="content">
        <p>OUR CASE STUDY</p>
        <h2>We work with global brands</h2>
        </div>
        
        <div className="cards row">
        {services && services.map(item=>(
           <Service key={item._id} item={item}/>
            ))}
            
        
        </div>
        </div>
    </section>
  )
}

export default OurCase