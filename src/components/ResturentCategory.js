
import ItemList from "./itemList"

const ResturentCategory = ({resCategory, showItem, handel }) => {
    
    return  (
        <div className="shadow bg-gray-100 w-6/12 m-auto p-4 mt-4" onClick={()=>handel()}>
            <div className="flex justify-between ">
                <h1>{resCategory.card.card.title}{" ("+resCategory.card.card.itemCards.length+")"}</h1>
                <span>↑</span>
            </div>
            {showItem && <div>
                {resCategory.card.card.itemCards.map((each)=> <ItemList resCard={each} key={each.card.info.id}/>)}
            </div>}
            
        </div>
    )
}


export default ResturentCategory