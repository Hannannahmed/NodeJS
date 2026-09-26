import { Model } from "../models/index.js"
import bcrypt from "bcrypt"


export const signUpModel = async (data) => {

    const hashpassword = bcrypt.hashSync(data?.password, 10)

    const response = await new Model({
        ...data,
        password: hashpassword
    })
        .save()

    const user = response.toObject()

    delete user.password

    return user
}

export const loginModel = async (data) => {
    const user = await Model.findOne({ email: data?.email })
    if (!user) {
        throw new Error("Invalid email or password");
    }
    const isPasswordValid = bcrypt.compareSync(data?.password, user.password)
    if (!isPasswordValid) {
        throw new Error("Invalid email or password");
    }

    const response = user.toObject();

    delete response.password;

    return response
}









export const addData = async (data) => {
    try {
        const hashpassword = bcrypt.hashSync(data?.password, 10)

        const result = await Model.create({ ...data, password: hashpassword })
        const response = result.toObject();

        delete response.password
        return response
    } catch (error) {
        console.log(error)
        throw error
    }
}
export const getAll = async () => {
    try {
        const data = await Model.find().select("-password")
        const response = data.map((item) => item.toObject());
        return response
    } catch (error) {
        console.log(error)
        throw error
    }
}



