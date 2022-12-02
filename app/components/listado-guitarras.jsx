



import Guitarra from "./guitarra"

export default function ListadoGuitarras({guitarrasP}) {
  return (
    <>
        <h2 className='heading'>Nuestra Coleccións</h2>
        {guitarrasP?.length && (
            <div className='guitarras-grid'>
                {guitarrasP.map( guitarraP => (
                    <Guitarra
                        key={guitarraP?.id}
                        guitarraP={guitarraP?.attributes}
                    />
                ))}
            </div>
        )}
    </> 
  )
}
