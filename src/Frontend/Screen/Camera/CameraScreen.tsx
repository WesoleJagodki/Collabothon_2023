import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {Text, View, TouchableOpacity, Alert, ImageBackground} from 'react-native'
import {Camera, CameraType} from 'expo-camera'
import {cameraScreen} from "./CameraScreenStyle";
import {Box} from "@gluestack-ui/themed";

let camera: Camera
let base64 = require('base-64');

function uploadImage(image: any) {
    console.log("Before if");
    if (!image?.uri) {
        return;
    }
    console.log("After if");
    let localUri = image.uri || "";
    let filename = localUri.split("/").pop() || "";

    let match = /\.(\w+)$/.exec(filename);
    let formdata = new FormData();

    formdata.append("file", image.base64);

    const encodedPhoto = base64.encode(image.uri);
    console.log(encodedPhoto);
    formdata.append("file", encodedPhoto);
    let requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
    };

    fetch(
        "http://10.10.11.138:5000/process-receit",
        requestOptions
    )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
}


export function CameraScreen() {
    const [startCamera, setStartCamera] = React.useState(false)
    const [previewVisible, setPreviewVisible] = React.useState(false)
    const [capturedImage, setCapturedImage] = React.useState<any>(null)
    const [cameraType, setCameraType] = React.useState(CameraType.back)
    const [flashMode, setFlashMode] = React.useState('off')

    const __startCamera = async () => {
        const {status} = await Camera.requestPermissionsAsync()
        console.log(status)
        if (status === 'granted') {
            setStartCamera(true)
        } else {
            Alert.alert('Access denied')
        }
    }
    const __takePicture = async () => {
        const photo: any = await camera.takePictureAsync()
        console.log(photo)
        uploadImage(photo);
        setPreviewVisible(true)
        //setStartCamera(false)
        setCapturedImage(photo)
    }
    const __savePhoto = () => {}
    const __retakePicture = () => {
        setCapturedImage(null)
        setPreviewVisible(false)
        __startCamera()
    }
    const __handleFlashMode = () => {
        if (flashMode === 'on') {
            setFlashMode('off')
        } else if (flashMode === 'off') {
            setFlashMode('on')
        } else {
            setFlashMode('auto')
        }
    }
    const __switchCamera = () => {
        if (cameraType === CameraType.back) {
            setCameraType(CameraType.front)
        } else {
            setCameraType(CameraType.back)
        }
    }

    return (
        <Box style={cameraScreen.container}>
            {startCamera ? (
                <Box
                    style={{
                        flex: 1,
                        width: '100%'
                    }}
                >
                    {previewVisible && capturedImage ? (
                        <CameraPreview photo={capturedImage} savePhoto={__savePhoto} retakePicture={__retakePicture} />
                    ) : (
                        <Camera
                            type={cameraType}
                            flashMode={flashMode}
                            style={{flex: 1}}
                            ref={(r) => {
                                camera = r
                            }}
                        >
                            <Box
                                style={{
                                    flex: 1,
                                    width: '100%',
                                    backgroundColor: 'transparent',
                                    flexDirection: 'row'
                                }}
                            >
                                <Box
                                    style={{
                                        position: 'absolute',
                                        left: '5%',
                                        top: '10%',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <TouchableOpacity
                                        onPress={__handleFlashMode}
                                        style={{
                                            backgroundColor: flashMode === 'off' ? '#000' : '#fff',
                                            borderRadius: '50%',
                                            height: 25,
                                            width: 25
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 20
                                            }}
                                        >
                                            ⚡️
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={__switchCamera}
                                        style={{
                                            marginTop: 20,
                                            borderRadius: '50%',
                                            height: 25,
                                            width: 25
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 20
                                            }}
                                        >
                                            {cameraType === 'front' ? '🤳' : '📷'}
                                        </Text>
                                    </TouchableOpacity>
                                </Box>
                                <Box
                                    style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        flexDirection: 'row',
                                        flex: 1,
                                        width: '100%',
                                        padding: 20,
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <Box
                                        style={{
                                            alignSelf: 'center',
                                            flex: 1,
                                            alignItems: 'center'
                                        }}
                                    >
                                        <TouchableOpacity
                                            onPress={__takePicture}
                                            style={{
                                                width: 70,
                                                height: 70,
                                                bottom: 0,
                                                borderRadius: 50,
                                                backgroundColor: '#fff'
                                            }}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        </Camera>
                    )}
                </Box>
            ) : (
                <Box
                    style={{
                        flex: 1,
                        backgroundColor: '#fff',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <TouchableOpacity
                        onPress={__startCamera}
                        style={{
                            width: 130,
                            borderRadius: 4,
                            backgroundColor: '#14274e',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 40
                        }}
                    >
                        <Text
                            style={{
                                color: '#fff',
                                fontWeight: 'bold',
                                textAlign: 'center'
                            }}
                        >
                            Take picture
                        </Text>
                    </TouchableOpacity>
                </Box>
            )}

            <StatusBar style="auto" />
        </Box>
    )
}

const CameraPreview = ({photo, retakePicture, savePhoto}: any) => {
    console.log('sdsfds', photo)
    return (
        <Box
            style={{
                backgroundColor: 'transparent',
                flex: 1,
                width: '100%',
                height: '100%'
            }}
        >
            <ImageBackground
                source={{uri: photo && photo.uri}}
                style={{
                    flex: 1
                }}
            >
                <Box
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        padding: 15,
                        justifyContent: 'flex-end'
                    }}
                >
                    <Box
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <TouchableOpacity
                            onPress={retakePicture}
                            style={{
                                width: 130,
                                height: 40,

                                alignItems: 'center',
                                borderRadius: 4
                            }}
                        >
                            <Text
                                style={{
                                    color: '#fff',
                                    fontSize: 20
                                }}
                            >
                                Re-take
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={savePhoto}
                            style={{
                                width: 130,
                                height: 40,

                                alignItems: 'center',
                                borderRadius: 4
                            }}
                        >
                            <Text
                                style={{
                                    color: '#fff',
                                    fontSize: 20
                                }}
                            >
                                save photo
                            </Text>
                        </TouchableOpacity>
                    </Box>
                </Box>
            </ImageBackground>
        </Box>
    )
}
