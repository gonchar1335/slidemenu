import React, {Component} from "react"
import {useState} from "react";
import MenuButton from "./MenuButton";
import Menu from "./Menu";

function MenuContainer(){
    const [visible, setVisible] = useState(false)
    const toogleMenu = ()=>{
        setVisible(!visible);
    }

    const handleMouseDown = (e)=>{
        toogleMenu();
        console.log('clicked')
        e.stopPropagation();
    }

    return(  
        <div>
            <MenuButton handleMouseDown ={handleMouseDown} />
            <Menu handleMouseDown ={handleMouseDown}
            menuVisibility = {visible} />
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
