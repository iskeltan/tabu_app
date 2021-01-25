import {StyleSheet} from 'react-native';

let appBackground = '#3D5A80';
let cardBackground = '#E0FBFC';
let cardBorderColor = '#98C1D9';

let headerColor = '#f4511e';

let colorDark = "#293241";
let colorLight = "#E0FBFC";
let colorColored = "#EE6C4D";
let colorLight2 = "#98C1D9";
let colorDark2 = "#3D5A80";
let colorGreen = "#009688";

export default StyleSheet.create({
  formContainer: {
    marginTop: 10
  },
  formContainerText: {
    color: colorLight2
  },
  playerText: {
    color: colorColored
  },
  textInput: {
    backgroundColor: colorLight,
    padding: 10,
    color: colorDark2,
    borderWidth: 2,
    borderColor: colorDark,
    textAlign: "center",
    borderRadius: 15,
    width: 350,
    marginBottom: 10
  },
  startButton: {
    backgroundColor: colorColored,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
    padding: 10
  },
  startButtonText: {
    color: "#fff",
    fontSize: 14
  },
    headerStyle: {
      backgroundColor: colorColored,
    },
    container: {
        flex: 1,
        backgroundColor: colorDark2,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    allCards: {
        backgroundColor: '#264653',
        borderWidth:10
    },
    card: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 300,
      height: 400,
      borderWidth: 5,
      backgroundColor: colorLight,
      borderColor: colorDark2,
      borderRadius: 15
    },
    noMoreCardsText: {
      fontSize: 22,
    },
    cardText: {
        fontSize: 40,

    },
    choice: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    buttonContainer: {
        elevation: 8,
        backgroundColor: colorGreen,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginBottom: 2,
        marginTop: 10
      },
      yupStyle: { 
        borderColor: 'green',
        backgroundColor: 'green',
        borderWidth: 2,
        position: 'absolute',
        padding: 20,
        bottom: 250,
        borderRadius: 250,
        right: 0,
      },
      nopeStyle: {
        borderColor: 'red',
        backgroundColor: 'red',
        borderWidth: 2,
        position: 'absolute',
        padding: 20,
        bottom: 250,
        borderRadius: 250,
        left: 0,
      },
      text: {
          color: 'white'
      },
      text: {
          color: 'white'
      },
      maybeStyle: {
        borderColor: 'blue',
        backgroundColor: 'blue',
        borderWidth: 2,
        position: 'absolute',
        //padding: 20,
        bottom: 250,
        borderRadius: 250,
        //left: 100,
        //width: 100,
        textAlign: 'center',
        justifyContent: 'center',
        right: 100
      }
  })

  //export default styles;