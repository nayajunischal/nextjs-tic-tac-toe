"use client"
import clsx from 'clsx'
import React, { useState } from 'react'

const Square = ({ props }: {
    props: {
        value: string,
        onSquareClick: any
    }
}) => {
    return (
        <button className='border font-bold w-10 h-10 box-border transition-all cursor-pointer hover:bg-gray-200' onClick={props.onSquareClick}>
            <span className={clsx({ 'text-green-500': props.value === 'X', 'text-red-500': props.value === 'O' })}>{props.value}</span>
        </button>
    )
}

export default Square