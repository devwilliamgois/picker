
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Picker} from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props);

    this.state = {'servico':0,
    servicos:[
      {"nome":'Alinhamento',"valor":30},
      {"nome":'Balanceamento',"valor":40},
      {"nome":'Rodizio',"valor":100}
    ]  
  }
  }
  render() {
    let servicoItens = this.state.servicos.map((v, k) => {
      return(
          <Picker.Item key={k} value={k} label={v.nome}/>
      )
    });
    return (
      <View style={styles.body}>
      <Text style={styles.logo}>Auto peças Jose</Text>

          <Picker selectedValue={this.state.servico} onValueChange={(itemValue, intemIndex) => this.setState({'servico':itemValue})}>
                {servicoItens}
          </Picker>
      <Text style={styles.valor}>R$ {this.state.servicos[this.state.servico].valor}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex:1,
    paddingTop: 10,
    backgroundColor:"#CCCCCC"
  },
  logo:{
    fontSize:18,
    textAlign:'center',
    marginBottom:20
  },
  valor:{
    fontSize:18,
    textAlign:'center'
  }
});
