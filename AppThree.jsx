import React from 'react';

class AppThree extends React.Component {
   constructor(props) {
      super(props);
        
      this.state = {
         data: 1,
         dataTwo: 2,
         check: true
      }
            
             
      this.setNewNumber = this.setNewNumber.bind(this)
   };
    
              


   setNewNumber() {
        this.setState({data: this.state.dataTwo}, function () {

        });
       
       if(this.state.dataTwo % 3 == 0){
           this.setState({data: "Fizz"}, function(){
               
           });
       }
       if(this.state.dataTwo % 5 == 0){
           this.setState({data: "Buzz"}, function(){
               
           });
       }
       if(this.state.dataTwo % 3 == 0 && this.state.dataTwo % 5 == 0){
           this.setState({data: "FizzBuzz"}, function(){
               
           });
       }
       
       if(this.state.dataTwo == 100){
           this.setState({check: false}, function(){
               
           });
           this.setState({data: "Last Buzz and it's done!"})
       }
       
       
       this.setState({dataTwo: this.state.dataTwo + 1}, function(){

       });      
       
   }
   render() {       
      return (         
         <div>
            <button disabled={!this.state.check} onClick = {this.setNewNumber}>INCREMENT</button>
            <Content myNumber = {this.state.data}></Content>
         </div>
      );
   }
}
class Content extends React.Component {

   render() {
      return (
         <div>
            <h3>{this.props.myNumber}</h3>
         </div>
      );
   }
}

export default AppThree;