import './index.css'

const shirtFabrics=[
    {
        id:1,
        imageUrl:"/fabrics/a.jpg"
    },
    {
        id:2,
        imageUrl:"/fabrics/b.jpg"
    },
    {
        id:3,
        imageUrl:"/fabrics/c.jpg"
    },
    {
        id:4,
        imageUrl:"/fabrics/d.jpg"
    },
    {
        id:5,
        imageUrl:"/fabrics/e.jpg"
    },
    {
        id:6,
        imageUrl:"/fabrics/f.jpg"
    },
    {
        id:7,
        imageUrl:"/fabrics/g.jpg"
    },
    {
        id:8,
        imageUrl:"/fabrics/h.jpg"
    }
]



function Textures(props){
    const {isMaterialClicked}=props

    const onMaterialClick=(imageUrl)=>{
        isMaterialClicked(imageUrl)
    }
    return(
        <div className='fabrics-button-container'>
            {shirtFabrics.map(eachItem=>(
                <button className="fabric-button" onClick={() => onMaterialClick(eachItem.imageUrl)}>
                    <img src={eachItem.imageUrl} className="fabric" key={eachItem.id}/>
                </button>
            ))}
        </div>
    )
}

export default Textures