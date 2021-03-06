import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'
import axios from 'axios'

const ROOT_URL = 'https://us-central1-one-time-bb6dd.cloudfunctions.net'

const SignUpForm = () => {
    const { phone, setPhone } = useState('')

    const handleSubmit = async () => {
        try {
            await axios.post(`${ROOT_URL}/createUser`, { phone })
            await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone })
        } catch (err) {
            console.log(err)
        }
    }
    return(
        <>
        <View style={styles.input}>
            <Input 
                label="Enter Your Phone Number" 
                onChangeText={setPhone}
                value={phone}
            />
        </View>
        <Button 
            title="Submit" 
            onPress={handleSubmit}
        />
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10
    }
})

export default SignUpForm