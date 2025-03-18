// Start coding here
/**@jsxImportSource @emotion/react */
import {css} from '@emotion/react'

const Primary = css ` 
width: 171.18959045410156px;
height: 50px;
border-radius: 4px;
border:none;
background-color: #074EE8;
color: white;
` 
const Secondary = css ` 
width: 171.18959045410156px;
height: 50px;
border-radius: 4px;
border:none;
padding-x: 16px;
background-color: #07A4E8;
color: white;
` 
const Error = css ` 
width: 171.18959045410156px;
height: 50px;
border-radius: 4px;
border:none;
padding-x: 16px;
background-color: #DE5753;
color: white;
` 
const Success = css ` 
width: 171.18959045410156px;
height: 50px;
border-radius: 4px;
border:none;
padding-x: 16px;
background-color: #26B795;
color: white;
` 

function Button({type}) {
    return(
        <button css={
            (type === "Primary")? Primary:
                (type === "Secondary")?Secondary:
                    (type === "Success")?Success : Error
        }
        > Button </button>
    )
}

export default Button
