import "./navbar.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

function Navbar(){
  const {dispatch} = useContext(DarkModeContext);

    return(
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type={"text"} placeholder="Search..." />
                    <SearchOutlinedIcon />
                </div>

                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className="icon"/>
                        English
                    </div>
                    <div className="item"><DarkModeOutlinedIcon onClick={()=> dispatch({type:"TOGGLE"})} className="icon"/></div>  
                    <div className="item"><FullscreenExitOutlinedIcon className="icon"/></div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className="icon"/>
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className="icon"/>
                        <div className="counter">2</div>
                    </div>
                    <div className="item"><ListOutlinedIcon className="icon"/></div>
                    <div className="item">
                        <img className="avatar" src="https://images.pexels.com/photos/11422074/pexels-photo-11422074.png?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="profile_picture"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;