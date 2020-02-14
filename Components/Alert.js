import { Alert } from 'react-native'

function getString(values) {
    let booksString = "";
    for(let x in values) {
        if(x)
            booksString += "Book Id: " + values[x].book_id + ", " + "Book Name: " + values[x].name + '\n';
    }
    return booksString;
}
export default function displayAlert(values) {
    Alert.alert(
        'Books Issued',
        getString(values),
        [
        {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
        },
        ],
        {cancelable: false},
    );
}