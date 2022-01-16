import React, {Component, useState} from "react"
import {useState} from "react";

function MenuContainer(){
    const [visible, setVisible] = useState(false)
    return(
        <div>
            <div>
                <p>Найдешь пункт, который здесь лишний</p>
                <ul>
                    <li>Lorem</li>
                    <li>Ipsum</li>
                    <li>Dolor</li>
                    <li>Sit</li>
                    <li>Bumblebees</li>
                    <li>Aenean</li>
                    <li>Consectetur</li>
                </ul>
            </div>

        </div>
    )
}

export default  MenuContainer
