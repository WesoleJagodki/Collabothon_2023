import {StatusBar} from 'expo-status-bar'
import React, {useState} from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Alert, ImageBackground} from 'react-native'
import {Camera} from 'expo-camera'

export function CameraScreen() {
    const [startCamera,setStartCamera] = React.useState(false)
    const [previewVisible, setPreviewVisible] = useState(false)
    const [capturedImage, setCapturedImage] = useState<any>(null)
    const [cameraType, setCameraType] = React.useState(Camera.Constants.Type.back)

    let camera: Camera


    const __startCamera = async () => {
        const {status} = await Camera.requestPermissionsAsync()
        if (status === 'granted') {
            // start the camera
            setStartCamera(true)
        } else {
            Alert.alert('Access denied')
        }
    }

    const __takePicture = async () => {
        if (!camera) return
        const photo = await camera.takePictureAsync()
        console.log(photo)
        setPreviewVisible(true)
        setCapturedImage(photo)
    }

    const CameraPreview = ({photo}: any) => {
        console.log('sdsfds', photo)
        return (
            <View
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
                />
            </View>
        )
    }

    const __retakePicture = async () => {
        setCapturedImage(null);
        setPreviewVisible(false);
        await __startCamera();
    }

    const __switchCamera = () => {
        if (cameraType === 'back') {
            setCameraType('front')
        } else {
            setCameraType('back')
        }
    }

    return (
        <View style={styles.container}>

            {previewVisible && capturedImage ? (
                <CameraPreview photo={capturedImage} retakePicture={__retakePicture} />
            ) : (
                <Camera
                    style={{flex: 1, width: "100%"}}
                    type={cameraType}
                    ref={(r) => {
                        camera = r
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            width: '100%',
                            backgroundColor: 'transparent',
                            flexDirection: 'row'
                        }}
                    >
                        <View
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
                            <View
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
                            </View>
                        </View>
                    </View>
                </Camera>
            )}
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
                    {cameraType === 'front' ? '?' : '?'}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
