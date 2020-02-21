import { connect } from 'react-redux'
import MHArticle from '../components/MHArticle';

const mapStateToProps = state => {
    return ({
        title: state.article.title,
        body: state.article.body
    });
};

const mapDispatchToProps = dispatch => {

};
const VisibleArticle = connect(
    mapStateToProps,
    mapDispatchToProps
)(MHArticle);

export default VisibleArticle;