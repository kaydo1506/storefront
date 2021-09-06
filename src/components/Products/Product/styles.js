import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        // maxWidth: 345, original width style
        maxWidth: '100%',

        // height: 390,
    },
    media: {
        paddingTop: '56.25%', // 16:9
        height: '100px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}));
