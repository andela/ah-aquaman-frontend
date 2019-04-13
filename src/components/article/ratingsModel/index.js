import React, { Component } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import RateAction from "../../../actions/articleActions/rateActions";

export class RatingModal extends Component {
  state = {
    ratevalue: 0,
  };

  handleRate = () => {
    const rate = this.state.ratevalue;
    if (rate === 0 || Number.isNaN(parseInt(rate, 10))) {
      toast.error("No empty fields and Non Integers are allowed.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
        hideProgressBar: false,
        pauseOnHover: true,
      });
    } else {
      const { RateAction } = this.props;
      RateAction(rate, this.props.article);
    }
  };

  handleChange = (event) => {
    this.setState({ ratevalue: event.target.value });
  };

  render() {
    return (
      <div className="modal" id="rating-model">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Rating Modal</h4>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
            <div className="modal-body">
              <input 
                type="number" 
                className="form-control" 
                onChange={this.handleChange}  
                id="rate-form-input" 
                placeholder="Please enter your rating score." 
                min={1}
                max={5}
              />
            </div>
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={this.handleRate}
                data-dismiss="modal"
                id="rate-button-primary"
              >
                <i className="fa fa-check" />
                {" "}
                Rate
              </button>
              <button type="button" className="btn btn-danger" data-dismiss="modal">&times; Close</button>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.fetchArticlesReducer.articles,
});

export default connect(mapStateToProps, { RateAction })(RatingModal);
