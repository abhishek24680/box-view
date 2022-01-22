import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((design) => ({
    logo: {
        paddingRight: "20px",
        fontSize: "60px"
    },
    container: {
        backgroundColor: "grey",
        padding: design.spacing(10, 0, 4)
    },
    cardGrid: {
        paddingTop: "20px"
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    cardmedia: {
        paddingTop: "56.25%"  //16:9 aspect ratio 
    },
    cardContent: {
        flexGrow: 1, //expand fully to one
        textAlign: "left"
    },
    footer: {
        paddingTop: "40px"
    }
}))

export default useStyles;