   export default function Child({color = 'blue'}){
    return(
    <div className={`component-${color}`}>
      <h3>Hello {color}</h3>
    </div>
    )
   }
    