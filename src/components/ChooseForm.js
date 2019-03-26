import React, { Component } from "react";
import { Link } from "react-router-dom";

class ChooseForm extends Component {
  render() {
    return (
<div class="cotn_principal" id="allform">
  <div class="cont_centrar">

    <div class="cont_login">
      <div class="cont_info_log_sign_up">
        <div class="col_md_login">
          <div class="cont_ba_opcitiy">

            <h2>LOGIN</h2>
            <p>Already have an account?</p>
            <Link to="/loginuser"><button class="btn_login">STORE</button></Link>
            <Link to="/loginbuyer"><button class="btn_login">BUYER</button></Link>
          </div>
        </div>
        <div class="col_md_sign_up">
          <div class="cont_ba_opcitiy">
            <h2>SIGN UP</h2>


            <p>Don't have an account?</p>

            <Link to="/usersignup"><button class="btn_sign_up">STORE</button></Link>
            <Link to="/buyersignup"><button class="btn_sign_up">BUYER</button></Link>
          </div>
        </div>
        <Link to="/"><button class="button button1">Back</button></Link>
      </div>
        </div>
    </div>
  </div>
    );
  }
}

export default ChooseForm;
