import { StyleSheet } from 'react-native';

primaryColor = "#32305D"
highlightColor = "#5050A5"
bgColor = "#FFFFFF"
borderColoer = "#EEEEEE"
textColor = "#32305D"

export default StyleSheet.create({
   container: {
    marginLeft: 20,
    marginRight: 20,
   },
    logoSize: {
    height: 114,
    width: 114,
  },
  input: {
    borderColor: "#EEEEEE",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    margin: 0,
    height: 60,
    padding: 10,
  },
  topRadius: {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomWidth: 0.5,
  },
  bottomRadius: {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    borderTopWidth: 0.5,
  },
  h1: {
    fontSize: 26,
    color: primaryColor,
  },
  primaryButton: {
    backgroundColor: "#5050A5",
  }, 
  link: {
color: highlightColor,
  },
  bgImg: {
    height: 175,
    borderRadius: 10,
    resizeMode: "cover",
  },
  flexContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardMargin:{
    marginTop: 12,
    marginBottom: 12,
  },
  cardOverlay:{
    backgroundColor: "rgba(0,0,0,0.3)",
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10,
  },
  bookmark: {
  maxWidth: 37,
  height: 37,
  position: 'absolute', 
  right: 13,

  },
  bookmarkIcon: {
    backgroundColor:highlightColor,
    width: 37,
    height: 37,
    color: "#ffffff",
    textAlign: 'center',
    padding: 10,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  
  },
  cardTitle: {
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "bold",
  },
  cardBoldText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",

  },
  cardText: {
    color: "#ffffff",
    fontSize: 12,
  },
  cardContent: {
    marginTop: 75,
    paddingLeft: 12,
  },
  cardIcon: {
    color: "#ffffff",
  },
});

