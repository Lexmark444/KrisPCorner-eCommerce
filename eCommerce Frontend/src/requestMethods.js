import axios from 'axios'

const BASE_URL = "http://localhost:5000/api"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDU2Y2UwNGJhMzU0MDNkNTZmNzFiOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MzY0NDg1NywiZXhwIjoxNjg0MjQ5NjU3fQ.-rcQiVYLtTyB8SekPtAdererCkzUsA278ST233ji8Lo"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
})