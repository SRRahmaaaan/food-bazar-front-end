import axios from "axios"
import { useState } from "react"
import { useHistory } from "react-router"

const Functions = () => {
    const history = useHistory()
    const [values, setValues] = useState({
        name: "",
        forPeople: "",
        price:""
    })
    const handleChange = (event) => {
        const {name,value} = event.target
        setValues({
            ...values,[name]: value
        })
    }
    const [imageURL, setImageURL] = useState(null)
    const uploadImageUrl = (event) => {
        const newImage = new FormData()
        newImage.set("key", "0d5e7c99378ed383d26e9ee1a30d1c12")
        newImage.append("image", event.target.files[0])
        axios.post("https://api.imgbb.com/1/upload",newImage)
        .then(data => setImageURL(data.data.data.display_url))
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const newUploadFood = {
            desc: values,
            imageURL: imageURL
        }
        fetch("https://serene-castle-82467.herokuapp.com/newFood", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUploadFood)
        })
        .then(response => response.json())
        .then(result => {
            if (result) {
                history.push("/");
            }
        })
    }




    return {handleChange, values, handleSubmit, uploadImageUrl}
}

export default Functions
