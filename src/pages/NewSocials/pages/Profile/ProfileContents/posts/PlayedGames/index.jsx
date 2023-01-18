import React from 'react'
import "./games.scss"

export default function PlayedGames({ playedGames}) {
  return (
    <div className='played-games'>
        <h5>Games played</h5>

        <div className='games-list'>
           {
            playedGames.map((game)=>{

                return(
                    <div className='game-div'>
                        <img  src={game.img} />
                        
                        <h5>
                            <span className='game-name'> Axie infinity</span>
                            <span className='game-blockchain'>Blockchain</span>
                            <span className='play-btn'>Play</span>



                        </h5>


                    </div>
                )
            })

           }

            <h5>View more</h5>
        </div>

    </div>
  )
}
