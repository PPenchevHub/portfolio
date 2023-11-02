import React, { Component } from 'react'
import './pointer.scss'


export default function Pointer({page}) {
  return (
    <div className="pointerArrow">
    <a href={page} >
    <img src="assets/down.png" alt="" />
  </a>
  </div>
  )
}
