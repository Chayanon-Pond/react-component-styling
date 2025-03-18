// Start coding here
/**@jsxImportSource @emotion/react */
import {css} from '@emotion/react'
import { Frown, CircleAlert, TriangleAlert,CircleCheckBig } from 'lucide-react';

// const SizeIcon = 30;
// const AlertType= {
//     AlertError:     {text: "a error",
//                     bgColor: "#ffb3c6",
//                     icon:<Frown size={SizeIcon} color="red"/>},
//     AlertWarning: 
//                     { text: "a warning",
//                      bgColor:"rgb(255, 220, 199)",
//                      icon: <TriangleAlert size={SizeIcon} color="rgb(251, 98, 10)"/>},     
//     AlertInfo: 
//                      {text: "an alert",
//                      bgColor:"rgb(255, 240, 189)",
//                      icon: <CircleAlert size={SizeIcon} color="rgb(255, 165, 10)" />},  
//     AlertSuccess: 
//                      {text: "a success",
//                      bgColor:"rgb(189, 255, 191)",
//                      icon:<CircleCheckBig size={SizeIcon} color="rgb(7, 185, 13)" />}  
// }
// function Alert({type}) {
//     return(
//     <div 
//     css={css` 
//         display: flex;
//         flex-direction: row;
//         align-items: center;
//         gap:20px;
//         background-color: ${AlertType[type].bgColor};
//         padding: 8px;  
//         padding-left: 30px;
//         border-radius: 8px;
//         text-align: left;
//         ` }
//     >
//     {AlertType[type].icon}
//     <h2>This is {AlertType[type].text} alert box</h2>
//     </div>
//     )
//     }


//แบบเฉลย //กับมาแก้อยากกว่าด้านบน
function Alert(prop) {
    let bgColor = "rgb(255, 240, 189)";
    let icon = <CircleAlert size={30} color="rgb(255, 165, 10)" />;
    let text = "Info";
    if(prop.type === "AlertError"){
        bgColor = "#ffb3c6",
        icon=<Frown size={30} color="red"/>
        text='Error'
    }
    else if(prop.type ==="AlertWarning"){
        bgColor="rgb(255, 220, 199)",
        icon= <TriangleAlert size={30} color="rgb(251, 98, 10)"/>
        text='Warning'
    }    
    else if(prop.type === "AlertSuccess"){
        bgColor="rgb(189, 255, 191)",
        icon=<CircleCheckBig size={30} color="rgb(7, 185, 13)" />  
        text="Success"
    }
    return(
        <div 
        css={css` 
            display: flex;
            flex-direction: row;
            align-items: center;
            gap:20px;
            background-color: ${bgColor};
            padding: 8px;  
            padding-left: 30px;
            border-radius: 8px;
            text-align: left;
            ` }
        >
        {icon}
        <h2>This is {(text)} alert box</h2>
        </div>
        )
        }


export default Alert 