// import React, { Component } from "react";



// import '../../css/checkout.css';
// export default class ThankYouPage extends Component {
//     render() {
//         return (
//          //ss
//                <div class="jumbotron text-center">
//   <h1 class="display-3">Merci d'avoir choisi ArtisanatSHOP!</h1>
//   <p class="lead"><strong>Veuillez consulter votre boîte mail </strong> pour avoir le résultat de votre facture.</p>
//   <hr></hr>
//   <p>
//     Avez-vous des problèmes ? <a href="">Contactez-nous </a>
//   </p>
//   <p class="lead">
//     <a class="btn btn-primary btn-sm" href="/#" role="button">Continue to homepage</a>
//   </p>
// </div>
           
//         );
//     }
// }


//
import React, { Component } from "react";

import '../../css/checkout.css';
import axios from "axios";
export default class ThankYouPage extends Component {
    sendEmail(){
        axios.get('http://localhost:8080/facture/email/', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                console.log(res);
                alert('votre message a été envoyé');
            })
            .catch(error => console.error(error))

    };
    handleRowClick = (e) => {
        console.log(e.email);
        const email = e.email;
        this.setState({email})

    };
    render() {
        return (
         //ss
               <div class="jumbotron text-center">
  <h1 class="display-3">Merci d'avoir choisi ArtisanatSHOP!</h1>
  <p class="lead"><strong>Clickez pour avoir votre facture</strong> pour avoir le résultat de votre facture.</p>
  <hr></hr>

  <p class="lead">
    <a class="btn btn-primary btn-sm" role="button" onClick={this.sendEmail()}>Ma Facture</a>
  </p>
  <p class="lead">
     <a class="btn btn-primary btn-sm" href="/#" role="button">Continue to homepage</a>
  </p>
</div>
           
        );
    }
}