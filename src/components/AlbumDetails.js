import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card'
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetails = ({album}) => {
    const {title, artist, thumbnail_image, image, url} = album

    const {
        containerImgStyle,
        artistPicture,
        containerTextStyle,
        textTitle,
        textArtist,
        albumImage,
    } = styles

    return (
        <Card>
            <CardSection>
                <View style={containerImgStyle}>
                    <Image style={artistPicture} source={{uri: thumbnail_image}} />
                </View>
                <View style={containerTextStyle}>
                <Text style={textTitle}> {title}</Text>
                <Text style={textArtist}>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={albumImage} source={{uri: image}} />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)} >
                    Buy Now
                </Button>
            </CardSection>
        </Card>
        
    );
}

const styles = {
    containerImgStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 5
    },
    artistPicture: {width: 50, height: 50},
    containerTextStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    textTitle: {
        fontSize: 20,
    },
    textArtist: {
        marginLeft: 5
    },
    albumImage: {
        height: 300,
        flex: 1,
        width: null
    }
}

export default AlbumDetails;
