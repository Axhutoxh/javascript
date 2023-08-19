const PocketMoney=(props)=>{


    return (
        <div  className="like-wrapper">
            <div>   Money :{props.money}</div>
         
            <button onClick={ props.changeMoney}>Paise laya</button>
        </div>
    )
}

export default PocketMoney