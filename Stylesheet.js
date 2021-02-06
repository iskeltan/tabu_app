import {StyleSheet, Dimensions} from 'react-native';

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

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  gameHeaderBox: {
    flexDirection: 'row', 
    alignItems: 'center', 
    width: windowWidth - 10, 
    justifyContent: "space-between"
  },
  scoreBoardContainer: {
    alignItems: 'center', 
    backgroundColor: '#EE6C4D', 
    borderBottomRightRadius: 4, 
    borderBottomLeftRadius: 4, 
    width: windowWidth * 0.09, 
    height: windowHeight * 0.055
  },
  swipeCardContainer: {
    flex: 1,
    width: windowWidth - 10
  },
  scoreBoardText: {
    color: "white", 
    fontWeight: 'bold', 
    fontSize: 0.045*windowWidth, 
    textAlign: 'center'
  },
  scoreBoardBorder: {
    borderWidth: 0.5, 
    margin: 0, 
    width: '100%', 
    borderColor: 'white'
  },
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
    width: windowWidth * 0.9,
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
  bottomBanner: {
    //position: "absolute",
    //bottom: 0
  },
  endWinner: {
    margin: 10,
    flex: 0.3, 
    //flexDirection: 'column', 
    borderRadius: 15,
    backgroundColor: colorDark,
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
  endText: {
    color: colorLight2,
    fontWeight: "bold",
    justifyContent: 'center',
    textAlign: 'center'
  },
  startButtonText: {
    color: "#fff",
    fontSize: 0.04*windowWidth
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
    allCards: {},
    cardBottom: {
      flex: 0.8,
      width: windowWidth - 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    nopeButton: {
        borderColor: 'red',
        backgroundColor: '#F04222',
        borderWidth: 2,
        borderRadius: 250,
        width: windowWidth * 0.25,
        height: windowHeight * 0.075,
        justifyContent: 'center'
    },
    yupButton: {
        borderColor: 'green',
        backgroundColor: '#009971',
        borderWidth: 2,
        borderRadius: 250,
        width: windowWidth * 0.25,
        height: windowHeight * 0.075,
        justifyContent: 'center'
    },
    maybeButton: {
        borderColor: '#0E3285',
        backgroundColor: '#0E3285',
        borderWidth: 2,
        borderRadius: 250,
        width: windowWidth * 0.25,
        height: windowHeight * 0.075,
        justifyContent: 'center'
    },
    choiceButtonText: {
      alignContent: 'center', 
      justifyContent: 'center', 
      textAlign: 'center', 
      color: 'white', 
      fontWeight: 'bold'
    },
    card: {
      justifyContent: 'center',
      alignItems: 'center',
      width: windowWidth / 1.5,
      height: windowHeight / 2.6,
      borderWidth: 5,
      backgroundColor: colorLight,
      borderColor: colorDark2,
      borderRadius: 15
    },
    noMoreCardsText: {
      fontSize: 20,
    },
    cardText: {
        fontSize: 0.08*windowWidth,

    },
    choice: {
        fontSize: 0.045*windowWidth,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    buttonContainer: {
        backgroundColor: colorGreen,
        borderRadius: 10,
        width: windowWidth / 3,
        height: windowHeight / 30,
        marginBottom: 5
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
      maybeStyle: {
        borderColor: 'blue',
        backgroundColor: 'blue',
        borderWidth: 2,
        position: 'absolute',
        bottom: 250,
        borderRadius: 250,
        textAlign: 'center',
        justifyContent: 'center',
        right: 100
      }
  })
  