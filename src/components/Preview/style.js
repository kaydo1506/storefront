import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    marginTop: { paddingTop: '110px', paddingLeft: '35px', paddingRight: '30px' },
    root: {
        maxWidth: '100%',
        flexGrow: 1,
        marginTop: '100px',
    },

    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '40px',
    },

    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 1000,
    },
    image: {
        width: 500,
        height: 500,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));
//    marginTop: '100px',
// paddingLeft: '80px',
// paddingRight: '80px',
