import React from 'react'
import './SeriesList.css'
import {Link} from 'react-router-dom'

const SeriesListItem = ({seri}) =>(
  <li>
    <Link to={`/series/${seri.show.id}`} className="linkSeriesitem">
      {seri.show.name}
    </Link>
  </li>
)

const SeriesList = props =>{
  return(
    <div>
      <ul className="series-list">
        {props.list.map(seri=>(
          <SeriesListItem seri={seri} key={seri.show.id}/>
        ))}
      </ul>
    </div>
  )
}

export default SeriesList;