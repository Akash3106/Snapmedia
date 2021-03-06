import React ,{useRef , useCallback, useState} from 'react'
import Webcam from 'react-webcam';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

const videoConstraints = {
    width: 280,
    height: 400,
    facingMode: "user"
};
  


function WebcamCapture() {
    const webcamRef = useRef(null) ;

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
    }, [webcamRef]);

    return (
        <div className="webcamCapture">
            <Webcam
                audio={false}
                height={videoConstraints.height}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={videoConstraints.width}
                videoConstraints={videoConstraints}
            />
            <RadioButtonUncheckedIcon
                className="webcamCapture__button"
                onClick={capture}
                fontSize="large"
            />
        </div>
    )
}

export default WebcamCapture;
