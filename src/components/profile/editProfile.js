import React, { Component } from "react";
import { connect } from "react-redux";
import { updateProfile, loadProfile } from "../../actions/profile/profileActions";
import { storage } from "../../firebase";
import EditProfileView from "../../views/profile/editprofile";
import Navbar from "../article/navbarComponent/Navbar";
import ImageBanner from "../article/ImageBanner";


export class EditProfile extends Component {
  state = {
    image: null,
    url: "",
    progress: 0,
    bio: "",
    isUploading: null,
  };

  componentDidMount() {
    this.props.loadProfile();
    const { profile } = this.props.profile;
    const url = (profile && profile.image ? profile.image : "");
    this.setState({ url });
  }

  handleChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
      return this.handleUpload(image);
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUpload = (image) => {
    const uploadTask = storage.ref(`images/${image.name}`)
      .put(image);
    uploadTask.on("state_changed",
      (snapshot) => {
        const isUploading = true;
        this.setState({ isUploading });
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({ progress });
      },
      (error) => {
      },
      () => {
        // complete function ....
        /* istanbul ignore next */
        storage.ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            this.props.updateProfile(url, "photo", this.props.history);
            this.setState({ url });
            const isUploading = false;
            this.setState({ isUploading });
          });
      });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { bio } = this.state;
    // Create user data
    const update = {
      bio,
    };
    this.props.updateProfile(update, "bio", this.props.history);
  };

  render() {
    const { isUpdating, profile, isLoading } = this.props.profile;
    return (
      <React.Fragment>
        <Navbar />
        <ImageBanner info="Edit Profile" page="profile" />
        <EditProfileView
          state={this.state}
          onChange={this.onChange}
          isUpdating={isUpdating}
          handleChange={this.handleChange}
          onSubmit={this.onSubmit}
          isLoading={isLoading}
          profile={profile}
        />
      </React.Fragment>
    );
  }
}

export const mapStateToProps = state => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { updateProfile, loadProfile })(EditProfile);
