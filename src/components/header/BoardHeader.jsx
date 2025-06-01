import React from 'react'
import MainLogo from '../logos/MainLogo'
import TurnCard from '../cards/TurnCard'
import RestartButton from '../buttons/RestartButton'

function BoardHeader() {
  return (
    <div className='flex items-center justify-between w-full max-w-[328px] sm:max-w-[457px] h-13'>
        <MainLogo />
        <TurnCard />
        <RestartButton />
    </div>
  )
}

export default BoardHeader