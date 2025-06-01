import React from 'react'
import BoardCard from '../cards/BoardCard'

function Board() {
  return (
    <div className='w-[328px] h-[328px] sm:w-[460px] sm:h-[461px] flex flex-wrap gap-4 items-center justify-center'>
        <BoardCard icon='o'/>
        <BoardCard icon='o'/>
        <BoardCard icon='o'/>
        <BoardCard icon='o'/>
        <BoardCard icon='o'/>
        <BoardCard icon='o'/>
        <BoardCard icon='o'/>
        <BoardCard icon='o'/>
        <BoardCard icon='o'/>
    </div>
  )
}

export default Board