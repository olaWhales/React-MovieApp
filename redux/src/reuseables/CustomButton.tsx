const CustomButton = (props: { style: any; onClick: any; textContent: any; type: any; })=> {
     const {style, onClick, textContent , type}= props ;
    
      return(
      <button onClick={onClick} className={style} type={type}> {textContent} </button>
      )   
}
export default CustomButton ;



