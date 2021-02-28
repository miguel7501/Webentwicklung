import react, { Component } from "react"
import "./Checkout.css"

class Checkout extends Component {
    render() {
        return (
            <div>
                <h1>Checkout</h1>       
                    <table>
                        <tr>
                            <td>
                                <h4>Name</h4>
                            </td>
                            <td>
                                <input type="text"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Adresse</h4>
                            </td>
                            <td>
                                <input type="text"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h4>Email</h4>
                            </td>
                            <td>
                                <input type="text"/>
                            </td>
                        </tr>
               <tr><td>
                        <button class="SendButton">Send</button>
                        </td></tr>
                
                </table>
            </div>
        )
    }


}
export default Checkout;