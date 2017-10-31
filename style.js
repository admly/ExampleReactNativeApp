
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor:'#00c7ef',
      borderRadius:20,
    justifyContent: 'space-between',
      paddingTop:30,
      paddingBottom:30,
      paddingLeft:30,
      paddingRight:30,


  },
    messageBoxTitleText:{
        fontWeight:'bold',
        color:'#fff',
        textAlign:'center',
        fontSize:20,
        marginBottom:10
    },
    messageBoxBodyText:{
        color:'#fff',
        fontSize:40
    }

});
export default styles;
