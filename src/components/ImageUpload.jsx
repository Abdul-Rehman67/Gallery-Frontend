import React, { useState } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { Checkbox,Button, Flex } from 'antd';


const ImageUpload = () => {
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);
  const [IsPrivate,setIsPrivate] = useState(false)

  const onChangeIsPrivate = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const UploadedFile = () =>{
    console.log("fileList",fileList)
  }
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
        {fileList.length < 5 && '+ Upload'}
      </Upload>
    </ImgCrop>
    <Checkbox onChange={onChangeIsPrivate}>Private ?</Checkbox>
    <Button>Save</Button>
    </>
  );
};
export default ImageUpload;