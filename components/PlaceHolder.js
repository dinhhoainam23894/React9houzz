import React from 'react';

export default class Placeholder extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    const {dataSrc , alt} = this.props;
    return (
      <div className="placeholder">
        <div className="spinner">
          <div className="rect1" />
          <div className="rect2" />
          <div className="rect3" />
          <div className="rect4" />
          <div className="rect5" />
        </div>
        { dataSrc && <img className="d-none" data-original={dataSrc} alt={alt}/>}
      </div>
    );
  }
}