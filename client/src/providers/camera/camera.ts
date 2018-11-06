import { Camera, CameraOptions } from '@ionic-native/camera';
import { Injectable } from '@angular/core';

@Injectable()
export class CameraProvider {

  constructor(private camera: Camera) {

  }

  image: string = ''; //create a variable to save picture path/source

  pictureFromCamera() {
    console.log('camera');
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      correctOrientation: true,
      saveToPhotoAlbum: true,
    } 
    return new Promise((res, rej) =>{
        this.camera.getPicture(options).then((imageData) =>{   
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        this.image = base64Image;
        console.log('photo'); 
        res(this.image)
        }).catch(error =>{
            rej(error);
            alert(this.getBase64());
        });  
    })  
  }

  getBase64(){
    return this.image;
  }

  pictureFromGallery(){
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      saveToPhotoAlbum: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      targetWidth: 500,
      targetHeight: 500
    }
    return new Promise((res, rej) =>{
        this.camera.getPicture(options).then((imageData) =>{   
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        this.image = base64Image;
        console.log('photo'); 
        res(this.image)
        }).catch(error =>{
            rej(error);
            alert(this.getBase64());
        });  
    }) 
  }

}
