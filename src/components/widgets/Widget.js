import "./widget.scss";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function widget({type}){
    let data;

    // temporary
    const amount = 100;
    const diff = 20;

    switch(type){
        case "user":
            data={
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: (
                    <PersonIcon className="icon" sx={{color: "crimson", bgcolor: "rgba(255,0,0,0.2)"}}/>
                )
            };
            break;
        case "order":
            data={
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: (
                    <ShoppingCartOutlinedIcon className="icon" sx={{color: "goldenrod", bgcolor: "rgba(218,165,32,0.2)"}}/>
                )
            };
            break;
        case "earning":
            data={
                title: "EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon: (
                    <MonetizationOnOutlinedIcon className="icon" sx={{color: "green", bgcolor: "rgba(0,128,0,0.2)"}}/>
                )
            };
            break;
        case "balance":
            data={
                title: "Balance",
                isMoney: true,
                link: "See details",
                icon: (
                    <AccountBalanceWalletOutlinedIcon className="icon" sx={{color: "purple", bgcolor: "rgba(128,0,128,0.2)"}}/>
                )
            };
            break;
        default:
            break;
    }

    return(
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"} {amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive"><KeyboardArrowUpOutlinedIcon/> {diff}%</div>
                {data.icon}
            </div>
        </div>
    )
}
