export function Item({id, text, handleClick}:{id:any, text:string, handleClick: ()=>void}){
    return(
        <li key={id}>
        {text}{" "}
        <button
          className="remove-item"
          onClick={handleClick}
        >
          X
        </button>
      </li>
    )
}