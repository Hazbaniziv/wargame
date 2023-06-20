import React from 'react'

export default function Totalplayers(props) {
    return (
        <div id='playerTable' > 
        <h3 style={{marginTop:'0'}}>List of players</h3>
        <table>
            <tr>
            <th>name</th>
            <th>wins</th>
            <th>losses</th>
            </tr>
        </table>   
            <div className='list'>
                <p>{props.list}</p>{'\n'}
            </div>
        </div>
    )
}
