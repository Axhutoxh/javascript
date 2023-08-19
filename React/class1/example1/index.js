console.log('aaa')
class YOOHOO extends React.Component {
    render(){
        return React.createElement('h2',{},'yoohoo react !')
    }
}

const domContainer = document.querySelector('#root')
ReactDOM.render(React.createElement(YOOHOO),domContainer)