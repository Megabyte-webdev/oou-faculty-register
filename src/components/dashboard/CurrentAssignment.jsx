import React, { memo } from 'react'

function CurrentAssignment({current}) {
    return (
        <li  className="w-full flex flex-col gap-[3px]">
        <progress value={current.score} max={10} className="progress-bar" />
        <div className="flex px-[5px] text-small w-full justify-between">
          <p className="">{current.title}</p>
          <p className="text-gray-500">{`${current.score}/10`}</p>
        </div>
      </li>
    )
}

export default memo(CurrentAssignment)
