import React, {Component} from "react";
import Splash from '../components/splash';

class SplashPage extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    if (this.props.location.state) {
      this.state = this.props.location.state;
    }
  
}



  render() {
  return <Splash/>;
  }

}
export default SplashPage;
