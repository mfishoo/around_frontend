import React, { Component } from 'react';
import GridGallery from 'react-grid-gallery';
import PropTypes from 'prop-types';

export class Gallery extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        user: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        caption: PropTypes.string,
        thumbnailWidth: PropTypes.number.isRequired,
        thumbnailHeight: PropTypes.number.isRequired,
      })
    ).isRequired,
  };
  render() {
    const { images } = this.props;
    const imageArr = images.map((image) => {
      return {
        ...image,
        costomOverlay: (
          <div className='gallery-thumbnail'>
            <div>{`${image.user}:$image.caption`}</div>
          </div>
        ),
      };
    });
    return (
      <div className='gallery'>
        <GridGallery
          backdropClosesModal={true}
          enableImageSelection={false}
          images={imageArr}
        />
      </div>
    );
  }
}

export default Gallery;
