import React, { useState } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { Checkbox,Button, Flex } from 'antd';


const ImageUpload = () => {
    const [fileList, setFileList] = useState([]);
    const [isPrivate, setIsPrivate] = useState(false);
  
    const onChangeIsPrivate = (e) => {
      setIsPrivate(e.target.checked);
    };
  
    const onChange = ({ fileList: newFileList }) => {
      // Limit to one image
      if (newFileList.length > 1) {
        newFileList = [newFileList[newFileList.length - 1]];
      }
      setFileList(newFileList);
    };
  
    const onPreview = async (file) => {
      let src = file.url;
      if (!src) {
        src = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.readAsDataURL(file.originFileObj);
          reader.onload = () => resolve(reader.result);
        });
      }
      const image = new Image();
      image.src = src;
      const imgWindow = window.open(src);
      imgWindow?.document.write(image.outerHTML);
    };
  
    const handleUpload = async () => {
      if (fileList.length === 0) {
        alert('Please upload an image first.');
        return;
      }
  
      const formData = new FormData();
      formData.append('image', fileList[0].originFileObj);
      formData.append('isPrivate', isPrivate);
  
      try {
        // const response = await axios.post('http://localhost:5000/api/upload', formData, {
        //   headers: {
        //     'Content-Type': 'multipart/form-data',
        //   },
        // });
        // console.log('Uploaded successfully:', response.data);
      } catch (error) {
        console.error('Upload failed:', error);
      }
    };
  
    return (
      <>
        <ImgCrop rotationSlider>
          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
          >
            {fileList.length < 1 && '+ Upload'}
          </Upload>
        </ImgCrop>
        <Checkbox onChange={onChangeIsPrivate}>Private?</Checkbox>
        <Button onClick={handleUpload}>Save</Button>
      </>
    );
  };
  
export default ImageUpload;