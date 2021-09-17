import React , {Component } from 'react'
import QRCode from 'qrcode.react'
import './App.css'

class App extends Component {

  constructor(props){
    super(props);

    this.state={
      url: ''
    }
  }

  url = (campo) => {
    this.setState({url: campo.target.value})
  }

  render(){
    return (
      <div className='container'>
        <div className='box'>
            <h1>QR CODE</h1>
            <h2>Digite o nome do site</h2>
            <input type="text" placeholder="Digite o site"
              onChange={this.url}>
            </input>
            <QRCode
            value={this.state.url}
            size={200}
            />
         </div>
      </div>
    )
  }
}

export default App