import image from '../assets/default.jpg' 



const Items ({title,description,src,url}) => {
    return (
      
      <div className="card bg-dark text-light mb-3 d-inline-block m-4 p-4" style={{maxWidth:"350px"}}>
    <img src={src?src:image} style={{height:"200px",width:"300px"}} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{title.slice(0,50)}</h5>
      <p className="card-text">{description?description.slice(0,90):"News is not available now, we can fix the problem soon,  we will be back soon. "}</p>
      <a href={url} className="btn btn-primary">Read more</a>
    </div>
  </div>
    )
  }

export default Items