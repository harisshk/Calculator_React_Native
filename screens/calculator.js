import React, {useState} from 'react';
import {
  Button,
  View,
  TouchableOpacity,
  Text,
  Alert,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import ViewButton from '../components/viewbutton';
export default function Calculator() {
  const [number, setNumber] = useState({
    firstNumber: '',
    secondNumber: '',
  });
  const [finalValue,setFinalValue]=useState({
    value:0,
    isFinalValueSet:false
  })
  const [operator, setOperator] = useState({
    isOperatorSet: false,
    operator: '',
  });
  const clear =()=>{
    setOperator({
      isOperatorSet: false,
      operator: '',
    })
    setFinalValue({
      value:0,
      isFinalValueSet:false
    })
    setNumber({
      firstNumber: '',
    secondNumber: '',
    })
  }
  const handlePress = (type, value) => {
    if (type === 'operator') {
      if (!operator.isOperatorSet && number.isFirstNumberSet) {
        console.log(value);
        setOperator({
          isOperatorSet: true,
          operator: value,
        });
      }
    } else if (type === 'number' && !finalValue.isFinalValueSet) {
      if (!operator.isOperatorSet ) {
        setNumber({
          ...number,
          isFirstNumberSet: true,
          firstNumber: number.firstNumber + value,
        });
      } else {
        console.log("__")
        setNumber({
          ...number,
          isSecondNumberSet: true,
          secondNumber: number.secondNumber + value,
        });
      }
    }
  };
  const handleEqual = ()=>{
    if(number.firstNumber!=="" && number.secondNumber!=="" && !finalValue.isFinalValueSet){
      if(operator.operator==="+"){
        const value = Number(number.firstNumber)+Number(number.secondNumber)
        setFinalValue({
          value:value,
          isFinalValueSet:true
        })
      }else
      if(operator.operator==="X"){
        const value = Number(number.firstNumber)*Number(number.secondNumber)
        setFinalValue({
          value:value,
          isFinalValueSet:true
        })
      }else if(operator.operator==="/"){
        const value = Number(number.firstNumber)/Number(number.secondNumber)
        setFinalValue({
          value:value,
          isFinalValueSet:true
        })
      }else if(operator.operator==="-"){
        const value = Number(number.firstNumber)-Number(number.secondNumber)
        setFinalValue({
          value:value,
          isFinalValueSet:true
        })
      }
    }
  }
  return (
    <SafeAreaView style={{backgroundColor:"#fff"}}>
      <View style={styles.display}>
       {!number.isFirstNumberSet && <Text style={styles.text}>0</Text>}
       {number.isFirstNumberSet && !operator.isOperatorSet && <Text style={styles.text}>{number.firstNumber}</Text>}
       {operator.isOperatorSet && !number.isSecondNumberSet && <Text style={styles.text}>{number.firstNumber}{operator.operator}</Text>}
       {number.isSecondNumberSet && !finalValue.isFinalValueSet && <Text style={styles.text}>{number.firstNumber}{operator.operator}{number.secondNumber}</Text>}
       {finalValue.isFinalValueSet && <Text style={styles.text}>= {finalValue.value}</Text>}
      </View>
      <View style={{display:"flex",flexDirection:"row-reverse",}}>
      <ViewButton type="ac" onPress={()=>{clear()}} title="AC" />
      </View>
      <View style={styles.buttonPanel}>
        <View>
          <ViewButton onPress={() => handlePress('number', '7')} title="7" />
        </View>
        <View>
          <ViewButton onPress={() => handlePress('number', '8')} title="8" />
        </View>
        <View>
          <ViewButton onPress={() => handlePress('number', '9')} title="9" />
        </View>
        <View>
          <ViewButton onPress={() => handlePress('operator', 'X')} title="X" />
        </View>
      </View>

      <View style={styles.buttonPanel}>
        <View>
          <ViewButton onPress={() => handlePress('number', '4')} title="4" />
        </View>
        <View>
          <ViewButton onPress={() => handlePress('number', '5')} title="5" />
        </View>
        <View>
          <ViewButton onPress={() => handlePress('number', '6')} title="6" />
        </View>
        <View>
          <ViewButton onPress={() => handlePress('operator', '-')} title="-" />
        </View>
      </View>
      <View style={styles.buttonPanel}>
        <View>
          <ViewButton onPress={() => handlePress('number', '1')} title="1" />
        </View>
        <View>
          <ViewButton onPress={() => handlePress('number', '2')} title="2" />
        </View>
        <View>
          <ViewButton onPress={() => handlePress('number', '3')} title="3" />
        </View>
        <View>
          <ViewButton onPress={() => handlePress('operator', '+')} title="+" />
        </View>
      </View>
      <View style={styles.buttonPanel}>
        <View>
          <ViewButton onPress={() => handleEqual()} title="="  />
        </View>
        <View>
          <ViewButton onPress={() => handlePress('number', '0')} title="0" />
        </View>
        <View>
          <ViewButton onPress={() => handlePress('number', '.')} title="." />
        </View>
        <View>
        <ViewButton onPress={() => handlePress('operator', '/')} title="/" />
        </View>
      </View>
    </SafeAreaView>
  );
}
const window = Dimensions.get('window');
const styles = StyleSheet.create({
  buttonPanel: {
    marginLeft: 3,
    marginRight: 3,
    display: 'flex',
    flexDirection: 'row',
  },
  display: {
    height: (window.height / 10) * 4.5,
    color: '#afafaf',
    display: 'flex',
    flexDirection: 'row',
  },
  text:{
    fontSize:40,
    margin:10
  }
});
