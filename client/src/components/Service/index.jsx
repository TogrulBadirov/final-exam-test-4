import "./index.scss"

const Service = ({item}) => {
  return (
    <div  className="card col-lg-4 col-md-6">
    <img src={item.image} alt="" />
    <h4>{item.title}</h4>
    <p>{item.category}</p>
</div>
  )
}

export default Service