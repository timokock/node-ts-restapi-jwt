import React, { Component } from 'react';
import axios from 'axios';

export default class PhotoList extends Component {

    state = {
        photos: [],
        title: '',
        description:'',
        imagePath:''
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/api/photos');
        this.setState({photos: res.data});
        console.log(this.state);
        
    };

    onChangeForm = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })       
    };

    onChangeUpload = (e) => {


    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h4 className="card card-header text-center">Upload a new photo</h4>
                        <form action="" method="POST">
                            <div className="form-group pt-2">
                                <input type="text" className="form-control" name="title" placeholder="Title" onChange={this.onChangeForm}/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="description" placeholder="Insert description" onChange={this.onChangeForm}/>
                            </div>
                            <div className="form-group">
                            <input type="file" className="form-control-file" name="image"/>
                          </div>
                          <div className="form-group">
                          <button type="submit" className="btn btn-success btn-block">Upload</button>
                        </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                        {
                            this.state.photos.map(photo => (
                                <div className="card m-2" key={photo._id}>
                                    <div className="row" id="cardRows">
                                        <div className="col-md-4">
                                            <img src={photo.imagePath} alt="" className="img-fluid p-2"/>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-block p-2">
                                                <h4 className="card-title mt-1">{photo.title}</h4>
                                                <p className="card-text">{photo.description}</p>
                                                <a href="/" className="btn btn-danger delete mb-2" _id={photo._id}>Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                    
                                    </div>
                                </div>
                            ))
                        }
                </div>
            </div>
        )
    }
}
